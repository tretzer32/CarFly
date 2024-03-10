function tabletAnimation(mainBlock, bigImage, nextImage, nextButton, nextRow) {
   
    const main_Block = document.querySelector(mainBlock);
    const big_Image = document.querySelector(bigImage);
    const next_Image = document.querySelector(nextImage);
    const next_Button = document.querySelector(nextButton);
    const next_Row = document.querySelector(nextRow);

    const data = [
        'img/main/carRadio.svg',
        'img/main/carRadio2.svg'
    ];

    let curIndex = 0;
    let isAnimating = false;

    next_Button.addEventListener('click', tabletAnimation);
    
    next_Button.addEventListener('click', tabletAnimation);
    
    function tabletAnimation() {
      if (isAnimating) {
        return;
      }
    
      isAnimating = true;
    
      big_Image.classList.add("fade-in");
      next_Row.classList.add('press-in');
      setTimeout(() => {
        curIndex = (curIndex + 1) % data.length;
        big_Image.src = data[curIndex];
        next_Image.src = data[(curIndex + 1) % data.length];
    
        big_Image.classList.remove("fade-in");
        next_Row.classList.remove('press-in');
    
        isAnimating = false;
      }, 200);
    }
}

export default tabletAnimation;
