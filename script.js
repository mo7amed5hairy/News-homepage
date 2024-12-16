const iconMenu = document.querySelector('.icon-menu');
const closeMenu = document.querySelector('.menu-close');
const navBar = document.querySelector('.navbar');

iconMenu.addEventListener('click',()=>{
    navBar.classList.toggle('active')
    document.body.classList.add('low_opacity')
})

closeMenu.addEventListener('click',()=>{
    navBar.classList.toggle('active')
    document.body.classList.remove('low_opacity')
})