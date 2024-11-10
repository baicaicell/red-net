let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.carousel-image');
    const dots = document.querySelectorAll('.carousel-dot');

    // 调整 slideIndex 的范围
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // 设置所有图片的位置
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    // 移除所有点的 active 类
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    // 设置当前点的 active 类
    dots[slideIndex].classList.add('active');
}

document.querySelector('.carousel-prev').addEventListener('click', function() {
    slideIndex -= 1;
    showSlides();
});

document.querySelector('.carousel-next').addEventListener('click', function() {
    slideIndex += 1;
    showSlides();
});

const dots = document.querySelectorAll('.carousel-dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index;
        showSlides();
    });
});

// 自动播放
setInterval(() => {
    slideIndex += 1;
    showSlides();
}, 10000); 