// // исходные по слайдеру
const sliderImages = document.querySelectorAll('.slider__img'),
    sliderLine = document.querySelector('.slider__line'),
    sliderDots = document.querySelectorAll('.slider__dot'),
    sliderBtnNext = document.querySelector('.slider__btn-next'),
    sliderBtnPrev = document.querySelector('.slider__btn-prev');
        
// Переменные 
let sliderCount = 0,
    sliderWidth;

// адаптивность картинок
window.addEventListener('resize', showSlide);

// Кнопки листания навешиваем на наши картинки стрелок 
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

// Автоматическое перелистовавание слайдов 
setInterval(() => {
    nextSlide()
}, 3000);


//Задает нужную ширину картинки
function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

// кнопка вперед 
function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
}

// Кнопка назад
function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length -1;

    rollSlider();
    thisSlide(sliderCount);
}

// Задает шаг перемезения слайдов
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Указывает какой слайд по счету активен 
function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

// Вешает клик на штучку
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})
//форма
document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})
document.getElementById("open-modal-btn1").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})
// document.getElementById("open-modal-btn2").addEventListener("click", function() {
//     document.getElementById("my-modal").classList.add("open")
// })
document.getElementById("open-modal-btn4").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})



document.getElementById("open-modal2-btn").addEventListener("click", function() {
    document.getElementById("my-modal2").classList.add("open")
})

document.getElementById("close-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
})
document.getElementById("close-modal-btn2").addEventListener("click", function() {
    document.getElementById("my-modal2").classList.remove("open")
})
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
});
document.querySelector("#my-modal .modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
document.querySelector("#my-modal2 .modal-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
document.getElementById("my-modal2").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
