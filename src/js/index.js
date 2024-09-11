const buttonRight = document.querySelector('.header__nav-button--right');
const buttonLeft = document.querySelector('.header__nav-button--left');

buttonRight.onclick = function () {
    document.querySelector('.header__nav-list').scrollLeft += 20;
    console.log(scrollLeft);
};
buttonLeft.onclick = function () {
    document.querySelector('.header__nav-list').scrollLeft -= 20;
    console.log(scrollLeft);
};
