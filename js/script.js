document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.getElementById('burger-button');
    const headerBurger = document.querySelector('.header-burger');
    const headerBurgerContainer = document.querySelector('.header-burger-container');
    const headerBurgerItems = document.querySelector('.header-burger-items');

    burgerButton.addEventListener('click', function () {
        headerBurgerItems.style.display = (headerBurgerItems.style.display === 'contents') ? 'none' : 'contents';
        headerBurgerContainer.style.height = (headerBurgerContainer.style.height === '170px') ? '80px' : '170px';
        headerBurger.style.backgroundColor = (headerBurger.style.backgroundColor === 'none') ? 'rgb(20,33,110)' : 'none';
    });
});