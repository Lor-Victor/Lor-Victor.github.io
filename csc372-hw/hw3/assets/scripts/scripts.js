"use strict";
const images = document.querySelectorAll('.normal');
images.forEach(image => {
    image.addEventListener('click', expandInfo);
});

function expandInfo(event) {
    const clickedImage = event.currentTarget;
    const foodItem = clickedImage.parentElement;
    const description = foodItem.querySelector('.hidden, .show');
    if (clickedImage.classList.contains("big")) {
        clickedImage.classList.remove('big');
        clickedImage.classList.add('normal');
        if (!description.classList.contains('hidden')) {
            description.classList.remove('show');
            description.classList.add('hidden');
        }
    }
    else {
        images.forEach(image => {
            image.classList.remove('big');
            image.classList.add('normal');
            const otherFoodItem = image.parentElement;
            const otherHidden = otherFoodItem.querySelector('.show');
            if (otherHidden && otherHidden.classList.contains('show')) {
                otherHidden.classList.remove('show');
                otherHidden.classList.add('hidden');
            }
        });
        images.forEach(img => img.classList.remove('show'));
        clickedImage.classList.remove('normal');
        clickedImage.classList.add('big');
        description.classList.remove('hidden');
        description.classList.add('show');
    }

}