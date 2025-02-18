let slideIndex1 = 0;
let slideIndex2 = 0;

function showSlides1(n) {
    let slides = document.querySelectorAll("#shooting_ball .slides");
    if (n >= slides[0].children.length) { slideIndex1 = 0 }
    if (n < 0) { slideIndex1 = slides[0].children.length - 1 }
    slides[0].style.transform = `translateX(${-slideIndex1 * 100}%)`;
}

function showSlides2(n) {
    let slides = document.querySelectorAll("#image_viewer .slides");
    if (n >= slides[0].children.length) { slideIndex2 = 0 }
    if (n < 0) { slideIndex2 = slides[0].children.length - 1 }
    slides[0].style.transform = `translateX(${-slideIndex2 * 100}%)`;
}

function moveSlide1(n) {
    showSlides1(slideIndex1 += n);
}

function moveSlide2(n) {
    showSlides2(slideIndex2 += n);
}

// 初期表示
showSlides1(slideIndex1);
showSlides2(slideIndex2);