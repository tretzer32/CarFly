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






document.querySelectorAll('.button--bubble').forEach(function(button) {
    var circlesTopLeft = button.parentElement.querySelectorAll('.circle.top-left');
    var circlesBottomRight = button.parentElement.querySelectorAll('.circle.bottom-right');
  
    var tl = new TimelineLite();
    var tl2 = new TimelineLite();
    var btTl = new TimelineLite({ paused: true });
  
    tl.to(circlesTopLeft, 1.2, { x: -25, y: -25, scaleY: 2, ease: Power4.easeInOut });
    tl.to(circlesTopLeft[0], 0.1, { scale: 0.2, x: '+=6', y: '-=2' });
    tl.to(circlesTopLeft[1], 0.1, { scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1');
    tl.to(circlesTopLeft[2], 0.1, { scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1');
    tl.to(circlesTopLeft[0], 1, { scale: 0, x: '-=5', y: '-=15', opacity: 0 });
    tl.to(circlesTopLeft[1], 1, { scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1');
    tl.to(circlesTopLeft[2], 1, { scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1');
  
    var tlBt1 = new TimelineLite();
    var tlBt2 = new TimelineLite();
  
    tlBt1.set(circlesTopLeft, { x: 0, y: 0, rotation: -45 });
    tlBt1.add(tl);
  
    tl2.set(circlesBottomRight, { x: 0, y: 0 });
    tl2.to(circlesBottomRight, 1.1, { x: 30, y: 30, ease: Power4.easeInOut });
    tl2.to(circlesBottomRight[0], 0.1, { scale: 0.2, x: '-=6', y: '+=3' });
    tl2.to(circlesBottomRight[1], 0.1, { scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1');
    tl2.to(circlesBottomRight[2], 0.1, { scale: 0.2, x: '+=15', y: '-=6' }, '-=0.2');
    tl2.to(circlesBottomRight[0], 1, { scale: 0, x: '+=5', y: '+=15', opacity: 0 });
    tl2.to(circlesBottomRight[1], 1, { scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1');
    tl2.to(circlesBottomRight[2], 1, { scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1');
  
    tlBt2.set(circlesBottomRight, { x: 0, y: 0, rotation: 45 });
    tlBt2.add(tl2);
  
    btTl.add(tlBt1);
    btTl.to(button.parentElement.querySelector('.button.effect-button'), 0.8, { scaleY: 1.1 }, 0.1);
    btTl.add(tlBt2, 0.2);
    btTl.to(button.parentElement.querySelector('.button.effect-button'), 1.8, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 1.2);
    btTl.to(button.parentElement.querySelector('.button.effect-button'), 1, { scale: 1, ease: Power4.easeInOut }, '-=1.8');
  
    btTl.timeScale(1.5);
  
    button.addEventListener('mouseover', function() {
      btTl.restart();
    });
  });
  





});