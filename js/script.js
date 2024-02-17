import buttonAnimation from "./modules/buttonAnimatin";
import mySlider from "./modules/slider";
import burger from "./modules/burger";

document.addEventListener('DOMContentLoaded', () => {

  buttonAnimation('.button--bubble', '.circle.top-left', '.circle.bottom-right', '.button.effect-button');
  mySlider('.my-slider__btns', '.my-slider__btn-prev', '.my-slider__btn-next');
  burger('.header__burger', '.header__ul', 'body', '.header__burger span');
});