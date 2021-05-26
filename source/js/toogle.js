var main_nav = document.querySelector('.main-nav');
var main_nav_toogle = document.querySelector('.page-header__toogle');
main_nav.classList.remove('main-nav--nojs');
main_nav.classList.add('main-nav--closed');
main_nav_toogle.classList.add('page-header__toogle--open');

main_nav_toogle.addEventListener('click', function(){
  if (main_nav.classList.contains('main-nav--closed')) {
    main_nav.classList.remove('main-nav--closed');
    main_nav.classList.add('main-nav--open');
    main_nav_toogle.classList.remove("page-header__toogle--open");
    main_nav_toogle.classList.add("page-header__toogle--closed");
  } else {
    main_nav.classList.add('main-nav--closed');
    main_nav.classList.remove('main-nav--open');
    main_nav_toogle.classList.remove("page-header__toogle--closed");
    main_nav_toogle.classList.add("page-header__toogle--open");
  }
});
