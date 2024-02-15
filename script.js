document.addEventListener('DOMContentLoaded', () =>{

const burger = document.querySelector('.header__burger');
const header__ul = document.querySelector('.header__ul');
const body = document.querySelector('body');
const burger__item = document.querySelectorAll('.header__burger span');
burger.addEventListener('click', () => {

    burger.classList.toggle('active');
    header__ul.classList.toggle('active');
    body.classList.toggle('lock');
    
    burger__item.forEach((el) =>{
        el.classList.toggle('max-width');
    });
});

});