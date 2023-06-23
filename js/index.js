document.querySelectorAll('.accordion-item__label').forEach((item) =>
    item.addEventListener('click', () =>{
       item.parentNode.classList.toggle('accordion-item--active');

        
    })

)
/// тест
function checkAnswers() {
    var questions = document.getElementsByClassName('q1');
    var totalQuestions = questions.length;
    var correctAnswers = 0;
    var isAllOptionsSelected = true; // Флаг, указывающий на то, что все варианты ответов выбраны
  
    for (var i = 0; i < totalQuestions; i++) {
      var question = questions[i];
      var radios = question.getElementsByClassName('answer_options');
      var isQuestionAnswered = false; // Флаг, указывающий на то, что вопрос был отвечен
  
      for (var j = 0; j < radios.length; j++) {
        var radio = radios[j];
  
        if (radio.checked) {
          isQuestionAnswered = true;
  
          if (radio.id === 'correct1') {
            correctAnswers++;
          }
        }
      }
  
      if (!isQuestionAnswered) {
        isAllOptionsSelected = false; // Если вопрос не отвечен, значит не все вопросы выбраны
      }
    }
  
    var resultElement = document.getElementById('result');
  
    if (isAllOptionsSelected) {
      if (correctAnswers >= 12) {
        resultElement.innerHTML = 'Поздравляем! Вы можете стать донором.';
      } else{
        resultElement.innerHTML = 'Вы не можете стать донором.';
      }
    } else {
      resultElement.innerHTML = ''; // Очистить результат, если не все варианты ответов выбраны
    }
  }
  
  function resetTest() {
    var answerOptions = document.getElementsByClassName('answer_options');
  
    for (var i = 0; i < answerOptions.length; i++) {
      answerOptions[i].checked = false;
    }
    
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = ''; // Очистить результат при сбросе теста
  }
  
  // Добавляем обработчик события для кнопки "Пройти тест заново"
  var resetButton = document.getElementById('resetButton');
  resetButton.addEventListener('click', resetTest);

// // Слайдер

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