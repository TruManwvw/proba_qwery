"use strict"

// Определяет устройство ПК/мобаил
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	IOS: function () {
		return navigator.userAgent.match(/iphone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.IOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	},
};


// Добавляет класс к body
if (isMobile.any()) {
	document.body.classList.add('_touch');
	//навешивает класс(_active) для родителя .arrow
	let menuArrows = document.querySelectorAll('.top');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		};
	};
} else {
	document.body.classList.add('_pc');
};

//Живой поиск на странице
window.onload = () => {
	let input = document.querySelector('input.search');
	input.oninput = function() {
		let value = this.value.trim();
		let list = document.querySelectorAll('ul.ul li');

		if (value != '') {
			list.forEach(elem => {
				if (elem.innerText.search(value) == -1) {
					elem.classList.add('hide');
					const uls = document.querySelector('.search_list');
					uls.classList.remove('none');
				}
			});
		} else {
			list.forEach(elem => {
				elem.classList.remove('hide');
				const ulsq = document.querySelector('.search_list');
				ulsq.classList.add('none');
			});
		}
		console.log(this.value);
	};
};


//Плавная прокрутка к якорю
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener('click', function(even) {
		even.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});
};





