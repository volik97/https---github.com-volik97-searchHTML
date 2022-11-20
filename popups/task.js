let modalMain = document.querySelector('#modal_main');
let modalSuccess = document.querySelector('#modal_success');
modalMain.classList.add('modal_active');

let modalClose = Array.from(document.querySelectorAll('div.modal__close_times'));
let showSuccess = document.querySelector('.show-success');

modalClose[0].onclick = () => {
    modalMain.classList.remove('modal_active');
};

showSuccess.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');

};

modalClose[1].onclick = () => {
    modalSuccess.classList.remove('modal_active');
};
