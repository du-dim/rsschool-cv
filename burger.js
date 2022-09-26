let burger = document.querySelector('.burger');
let menu = document.querySelector('.header_Block_nav');

burger.addEventListener('click', mobileMenu);

function mobileMenu() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');    
}

const navLink = menu.querySelectorAll('li');
navLink.forEach(link => link.addEventListener('click', closeMenu));
function closeMenu() {
    menu.classList.remove('active');
    burger.classList.remove('active');    
}
