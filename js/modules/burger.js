function burger(burgerContainer, header__links, bodyBlock, items__burger) {

    const burger = document.querySelector(burgerContainer);
    const header__ul = document.querySelector(header__links);
    const body = document.querySelector(bodyBlock);
    const burger__items = document.querySelectorAll(items__burger);

    burger.addEventListener('click', () => {

        burger.classList.toggle('active');
        header__ul.classList.toggle('active');
        body.classList.toggle('lock');

        burger__items.forEach((el, index) => {
            el.style.width = '';
            el.classList.toggle('actived');
            if (el.classList.contains('actived')) {
                switch (index) {
                    case 0:
                        el.style.width = '50%';
                        el.style.transform = 'rotate(-45deg)';
                        el.style.top = '50%';
                        break;
                    case 1:
                        el.style.width = '0%';
                        break;
                    case 2:
                        el.style.width = '0%';
                        break;
                    case 3:
                        el.style.width = '50%';
                        el.style.transform = 'rotate(45deg)';
                        el.style.top = '50%';
                        break;
                    default:
                        break;
                }
            } else {
                switch (index) {
                    case 0:
                        el.style.width = '30%';
                        el.style.transform = 'rotate(0deg)';
                        el.style.top = '0%';
                        break;
                    case 1:
                        el.style.width = '50%';
                        break;
                    case 2:
                        el.style.width = '75%';
                        break;
                    case 3:
                        el.style.width = '45%';
                        el.style.transform = 'rotate(0deg)';
                        el.style.top = '92%';
                        break;
                    default:
                        break;
                }
            }
        });
    });

}

export default burger;