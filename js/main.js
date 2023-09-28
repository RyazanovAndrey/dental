// Swiper Slider

const swiper = new Swiper('.swiper', {

  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// Pop-up

const btn = document.querySelector('.btn')
const popUp = document.querySelector('.pop-up-body')
const body = document.body
const bodyPx = window.innerWidth - document.body.offsetWidth + 'px'

function opnPop (){
  popUp.classList.add('open');
  body.style.overflow = 'hidden';
  body.style.paddingRight = bodyPx;
}

btn.addEventListener('click', () => {
  opnPop()
})

document.addEventListener('click', (event) => {
  if(event.target.classList.contains('pop-up-body')){
    popUp.classList.remove('open');
    body.style.overflow = 'visible';
    body.style.paddingRight = '0px';
  }
})

const cardBtn = document.querySelectorAll('.card-btn')
cardBtn.forEach(item => {
  item.addEventListener('click', () => {
    opnPop()
  })
})
