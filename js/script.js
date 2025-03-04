// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');

    nav.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});