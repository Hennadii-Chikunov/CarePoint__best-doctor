/* Script sliders */
document.addEventListener('DOMContentLoaded', function () {
  // инициализация слайдера
	var sliderOne = new SimpleAdaptiveSlider('#slider-one');
   var sliderTwo = new SimpleAdaptiveSlider('#slider-two');
  // назначим обработчик при нажатии на кнопку .btn-prev
  document.querySelector('.btn__prev').onclick = function () {
    // перейдём к предыдущему слайду
    sliderOne.prev();
  }
  // назначим обработчик при нажатии на кнопку .btn-next
  document.querySelector('.btn__next').onclick = function () {
    // перейдём к следующему слайду
    sliderOne.next();
	}
	// назначим обработчик при нажатии на кнопку .btn-prev
  document.querySelector('.btn-two__prev').onclick = function () {
    // перейдём к предыдущему слайду
    sliderTwo.prev();
  }
  // назначим обработчик при нажатии на кнопку .btn-next
  document.querySelector('.btn-two__next').onclick = function () {
    // перейдём к следующему слайду
    sliderTwo.next();
  }
});
/*  script для блок Sliders кнопка прочитать подробнее текст рыбу */
let checkIt = true;
			//если chekIt оставить внутри 
			//функции, то будет if всегда 
			//выполняться
			let btn = document.getElementById("btn");
			btn.addEventListener("click", readMore);

			function readMore() {
				let dots = document.getElementById("dots");
				let more = document.getElementById("read-more");

				if (checkIt) {
					more.style.display = "inline";
					dots.style.display = "none";
					btn.innerHTML = "Скрыть";
					checkIt = false;
				} else {
					dots.style.display = "inline";
					more.style.display = "none";
					btn.innerHTML = "Подробнее";
					checkIt = true;
				}
			}