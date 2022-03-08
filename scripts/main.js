const menuBtn = document.querySelector('.menu-btn');
const toggleMenu = document.querySelector('.toggle-menu');
const mediaQuery = window.matchMedia('(min-width: 768px)')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    toggleMenu.classList.toggle('is-active');
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    toggleMenu.classList.toggle('is-active');
  }
}); 
