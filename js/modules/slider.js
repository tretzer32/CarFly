import { tns } from "tiny-slider"

function mySlider(btnsContainer, prevButton, nextButton) {

    const btns__container = document.querySelector(btnsContainer);
    const prevButton__slider = document.querySelector(prevButton);
    const nextButton__slider = document.querySelector(nextButton);

    var slider = tns({
        container: '.my-slider',
        items: 1,
        autoplay: false,
        gutter: 15,
        controls: true,
        "mouseDrag": true,
        controlsContainer: btns__container,
        prevButton: prevButton__slider,
        nextButton: nextButton__slider,
        "loop": false,
        responsive: {
            700: {
                items: 2,
            }
        }
    });

    slider.events.on('indexChanged', (info) => {

        const numberOfItems = info.items;
        const isLastSlide = info.index === info.slideCount - numberOfItems;
        const isFirstSlide = info.index === 0;

        if (isFirstSlide) {
            prevButton__slider.classList.add('disabled');
        } else if (isLastSlide) {
            nextButton__slider.classList.add('disabled');
        } else {
            prevButton__slider.classList.remove('disabled');
            nextButton__slider.classList.remove('disabled');
        }
    });

}

export default mySlider;