
/* myLib start */
// пишем самовызывающую функцию 
;(function () {
	window.myLib = {};

	window.myLib.body = document.querySelector('body');
// функция проверки отрабатывания по клику именно на кнопку бургера, а не по спану или другому элементу
	                             // элемент текущий item и атрибут attr
	window.myLib.closestAttr = function (item, attr) {
		var node = item;
       // если есть html элемент текущий, идет запуск цикла
		while (node) {
			// забираем атрибут
			// у элемента берется атрибут 
			var attrValue = node.getAttribute(attr);
		  // и теперь, если у нас есть атрибут, то мы просто его возвращаем
			if (attrValue) {
				return attrValue;
			}
			// если нету, то у нас нода превращается в элемент родителя
			node = node.parentElement;
		}
		// и если атрибута нету, то возвращаем null
		return null;
	};

	 // функция проверки закрытия по клику
   window.myLib.closestItemByClass = function (item, className) {
		var node = item;
       // если есть html элемент текущий, идет запуск цикла
		while (node) {
			
			if (node.classList.contains(className)) {
				return node;
			}
			// если нету, то у нас нода превращается в элемент родителя
			node = node.parentElement;
		}
		// и если атрибута нету, то возвращаем null
		return null;
	};

	// функция отмены скролла при активном попАПЕ
	window.myLib.toggleScroll = function () {
		myLib.body.classList.toggle('no-scroll');
	};
})();

/* myLib finish */

/* header start */
  /* HEADER JS */
;(function () {
	
	if (window.matchMedia('(max-width: 1200px)').matches) {
		return;
	}

	var headerPage = document.querySelector('.header-page');

	window.addEventListener('scroll', function () {
		if (window.pageYOffset > 0) {
			headerPage.classList.add('is-active');
		} else {
			headerPage.classList.remove('is-active');
		}
	});
})();
/* header finish*/
/* popup start */
   // логика работы с popup
;(function () {
    // определение функции showPopup
	// показать попап
	var showPopup = function (target) {
		target.classList.add('is-active');
	};
	// показать закрыть попАП
	var closePopup = function (target) {
		target.classList.remove('is-active');
	};

	myLib.body.addEventListener('click', function (e) {
		var target = e.target;
		var popupClass = myLib.closestAttr(target, 'data-popup');
      // если попап класс равен null то мы возвращаем и ничего не делаем
		if (popupClass === null) {
			return;
		}
      // если не равен 
		// сначала, уберем стандартное поведение элемента
		e.preventDefault();
		// здесь происходит конкатенация , соединяем класс с точкой, чтобы найти как по селектору
		var popup = document.querySelector('.' + popupClass);
      
		// и здесь так же происходит проверка , если есть
		// попап , то мы показываем окно
		if (popup) {
			// функция showPopup
			showPopup(popup);
			myLib.toggleScroll();
		}
	});

   // функция закрытия попАПА при нажатии (клике) на кнопку закрыть и на затемненную область
	myLib.body.addEventListener('click', function (e) {
		var target = e.target;

		// если таргет содержит попАП button close или класс popup__body
		if (target.classList.contains('popup-close') ||
			 target.classList.contains('popup__body')) {
			var popup = myLib.closestItemByClass(target, 'popup');
			
			 // вызываем close POPUP и передаем popup
			closePopup(popup);
			myLib.toggleScroll();
			}
	});

   // функция закрытия попАПА при кнопке ESC
	myLib.body.addEventListener('keydown', function (e) {
		// если не равняется 27 то есть клавиши ESC то мы возвращаемся и ничего не делаем
		// ВРЕМЕННО ИСПОЛЬЗУЮ УСТАРЕВШЕЕ СВОЙСТВО , обязательно разберу его и заменю на современное кросс браузерное
		if (e.keyCode !== 27) {
			return;
		}

	   // иначе находим АКТИВНЫЙ попАП 
		var popup = document.querySelector('.popup.is-active');
		// и если есть попАП , то мы делаем close popUP 
		if (popup) {
			// передаем сюда popup
			closePopup(popup);
			myLib.toggleScroll();
		}
	});
})();
/* popup finish */

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