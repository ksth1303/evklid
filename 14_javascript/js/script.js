let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener("click",

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach((el) => {
  el.addEventListener('click', () => {
    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

let swiper = new Swiper('.hero__swiper', {
  loop: true,
  speed: 1500,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
});

let tabsBtn = document.querySelectorAll('.steps__btn');

let tabsItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('steps__btn--active')});
    e.currentTarget.classList.add('steps__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('tabs__item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.faq__list', {
  duration: 700,
  elementClass:	'accordion__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__bottom',

});
})

document.querySelector(".btn_header--open").addEventListener("click", function() {
  document.querySelector(".nav__form").classList.add("nav__form--active");
  this.classList.add("active");
})
document.querySelector(".form-close").addEventListener("click", function() {
   let form = document.querySelector(".nav__form");
  form.classList.remove("nav__form--active");
    form.querySelector("input").value = "";
    document.querySelector(".btn_header--open").classList.remove("active")
});

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".nav__form");
  if (!target.closest(".header__container")) {
  form.classList.remove("nav__form--active");
    form.querySelector("input").value = "";
    document.querySelector(".btn_header--open").classList.remove("active")
  }
})



