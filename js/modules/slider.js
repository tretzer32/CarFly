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

}

export default mySlider;