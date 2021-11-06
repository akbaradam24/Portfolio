function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode")
}

const menuToggle = document.querySelector('.menu-toggle input');
const headerRight = document.querySelector('.header-right');

menuToggle.addEventListener('click', function() {
    headerRight.classList.toggle('slide');
});


