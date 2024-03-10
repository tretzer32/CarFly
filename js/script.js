import buttonAnimation from "./modules/buttonAnimatin";
import mySlider from "./modules/slider";
import burger from "./modules/burger";
import tabletAnimation from "./modules/tabletAnimation";

document.addEventListener('DOMContentLoaded', () => {

  buttonAnimation('.button--bubble', '.circle.top-left', '.circle.bottom-right', '.button.effect-button');
  mySlider('.my-slider__btns', '.my-slider__btn-prev', '.my-slider__btn-next');
  burger('.header__burger', '.header__ul', 'body', '.header__burger span');
  tabletAnimation('.main__big-block', '.main__tablet-big-image img', '.main__tablet-next-block img', ".main__tablet-next", '.main__tablet-next-row');

  const block = document.querySelectorAll('.frag__block');
  const ans = document.querySelectorAll('.frag__answer');

  function hideFrags() {
    ans.forEach((el) => {
      el.classList.remove('show');
    });
  }

  block.forEach((el, i) => {
    el.addEventListener('click', () => {
      const ans = el.querySelector('.frag__answer');
      if (ans.classList.contains('show')) {
        hideFrags();
      } else {
        hideFrags();
        ans.classList.add('show');
      }
    });
  });

});