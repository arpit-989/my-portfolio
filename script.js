const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.oneclick =()=>{
    navLinks.classList.toggle('active');
}
