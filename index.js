document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle'); // Match button's class
    const nav = document.querySelector('nav'); // Select <nav>

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('show-menu'); // Toggle class on nav
    });
});
