
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




const galleryImg = document.querySelector('.gallery__image');
const galleryThumbs = document.querySelectorAll('.gallery__thumbs img');
const galleryClose = document.querySelector('.gallery__close');
const galleryCont = document.querySelector('.gallery__cont');

function galleryHandle (event) {
  const src = event.target.getAttribute('src');
  galleryImg.setAttribute('src', src);
  galleryCont.classList.remove('gallery__cont--hidden');
  console.log('click', src);
}
galleryThumbs.forEach(function (elem, index) {
  elem.addEventListener('click', galleryHandle);
});

function galleryCloseHandle () {
  galleryCont.classList.add('gallery__cont--hidden');
}
galleryClose.addEventListener('click', galleryCloseHandle);




const carrousel = document.querySelector('.carrousel');
const carrouselStripe = document.querySelector('.carrousel__stripe');

carrousel.addEventListener('click', function () {
  const width = carrousel.clientWidth;
  carrouselStripe.style.transform = 'translate(-' + width + 'px, 0px)';
  console.log();
});