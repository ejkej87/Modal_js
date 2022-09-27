const actionBtn = document.querySelector('.action-btn');
const actionTwoBtn = document.querySelector('.action-two-bnt')
const actionThreeBtn = document.querySelector('.action-three-btn')


const modal = (body = {}) => {
    return `<div tabindex="10" class="modal">
    <p class="modal-title ${body.type || ''}">
        <i class="modal-title-icon" data-feather="${body.modal_icon || 'info'}"></i>
        ${body.title || 'Jesteś pewny?'}
    </p>
    <p class="modal-description">${body.description || 'Potwierdź swój wybór'}</p>
    <div class="modal-buttons">
        <button class="modal-accept modal-action-btn">${body.accept_btn || 'Tak'}</button>
        <button class="modal-decline modal-action-btn">${body.decline_btn || 'Nie'}</button>
    </div>
    <button class="modal-close-icon"><i data-feather="x"></i></button>
</div>`
}

const createModal = (value) => {
    const modalContainer = document.createElement('div')
    modalContainer.className = 'modal-container';
    modalContainer.innerHTML = modal(value);
    document.body.appendChild(modalContainer);

    const actionCloseBtn = document.querySelector('.modal-close-icon')
    actionCloseBtn.addEventListener('click', (e) => {
        const modal = document.querySelector('.modal-container')
        modal.remove();
        document.body.style.overflow = "auto"
    })

    const closeButtons = document.querySelectorAll('.modal-action-btn')
    closeButtons.forEach(btn => btn.addEventListener('click', () => {
        const modal = document.querySelector('.modal-container')
        modal.remove();
        document.body.style.overflow = "auto"
    }))

    const modalActiv = document.querySelector('.modal');
    modalActiv.focus();
    modalActiv.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.querySelector('.modal-container')
            modal.remove();
            document.body.style.overflow = "auto"
        }
    })

    const modalActivContainer = document.querySelector('.modal-container')
    modalActivContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-container')) {
            e.target.remove()
        }
    })

    feather.replace();
    document.body.style.overflow = "hidden"
}


const addToBasked = () => {
    console.log('dodano do koszyka')

    createModal({
        type: "warning",
        modal_icon: "alert-triangle",
        title: "Lorem ipsum dolor title",
        description: "Lorem ipsum description,Lorem ipsum description,Lorem ipsum description,Lorem ipsum description",
        accept_btn: "Zaakceptuj",
        decline_btn: "Anuluj"
    })

}

actionBtn.addEventListener('click', addToBasked)
actionTwoBtn.addEventListener('click', () => {
    createModal({
        type: "success",
        modal_icon: "check",
        title: "Inny tytuł modala",
        description: "Lorem ipsum description,Lorem ipsum description,Lorem ipsum description,Lorem ipsum description",
        accept_btn: "Ok",
        decline_btn: "Nie"
    })
})

actionThreeBtn.addEventListener('click', () => {
    createModal()
})