document.addEventListener("DOMContentLoaded", function () {
    const mainImg = document.getElementById('selected-phone');

    const toggleImg = (img) => {
        const src = img.getAttribute('src');
        const number = src.match(/\d+/)[0];
        const newNumber = parseInt(number);
        const newSrc = mainImg.getAttribute('src').replace(/\d+/, newNumber);
        mainImg.setAttribute('src', newSrc);
    }

    document.querySelectorAll('.row .product').forEach(img => {
        img.addEventListener("click", function () {
            toggleImg(img);
        });
    });
});