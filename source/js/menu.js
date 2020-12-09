var navMain = document.querySelector('.main-nav');
var navButton = document.querySelector('.main-nav__menu-button');

navMain.classList.remove('main-nav--nojs');

navButton.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--open');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--open');
  }
});
