const menuIcon = document.querySelector('#menu-icon')
const navlinks = document.querySelector('ul.navbar');

menuIcon.onclick = () => {
    navlinks.classList.toggle('active');
}