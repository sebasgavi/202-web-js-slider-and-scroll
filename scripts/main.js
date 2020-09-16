
const slider = document.querySelector('.compare__input');
const img = document.querySelector('.compare__images img:last-child');

function handleSlider () {
  console.log('hola', slider.value);
  // img.style.opacity = slider.value;
  img.style.width = (slider.value * 100) + '%';
}
slider.addEventListener('input', handleSlider);



const body = document.querySelector('body');
const h2 = document.querySelector('h2');
function handleScroll () {
  // body.style.backgroundColor = 'rgb(' + window.scrollY + ', 0, 0)';
  // body.style.color = 'rgb(' + window.scrollY + ', 255, 255)';
  // body.style.backgroundColor = 'rgb(255,255,255)';
  if(window.scrollY > h2.offsetTop) {
    body.style.backgroundColor = 'rgb(255,0,255)';
  } else {
    body.style.backgroundColor = 'rgb(255,255,255)';
  }

  console.log('scroll', window.scrollY);
}
window.addEventListener('scroll', handleScroll);