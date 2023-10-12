let delay = false;
let currentPage = 1;
let pageCount = document.querySelectorAll(".section").length;

let swipe = document.getElementsByTagName(".section");

const html = document.querySelector("html");
const pageHeight = document.querySelector(".section").offsetHeight;

window.onload = function () {
	init();

	document.addEventListener("wheel", wheelHandler, { passive: false });
	document.addEventListener("scroll", scrollHandler, { passive: false });
};

window.onclose = function () {
	document.removeEventListener("wheel", wheelHandler);
	document.removeEventListener("scroll", scrollHandler);
};

const wheelHandler = event => {
	event.preventDefault();

	let wd = event.wheelDelta || -event.detail;
	if (delay) return;

	if (wd < 0) {
		if (currentPage < pageCount) {
			scrollDown();
		}
	} else {
		if (currentPage > 1) {
			scrollUp();
		}
	}
};

const scrollHandler = event => {
	event.preventDefault();
};

const scrollUp = () => {
	if (currentPage > 1) {
		html.scrollTo({
			top: pageHeight * (currentPage - 2),
			left: 0,
			behavior: "smooth",
		});
		delay = true;
		setTimeout(function () {
			delay = false;
		}, 800);
		currentPage--;
	}
};

const scrollDown = () => {
	if (currentPage < pageCount) {
		html.scrollTo({
			top: pageHeight * currentPage,
			left: 0,
			behavior: "smooth",
		});
		delay = true;
		setTimeout(function () {
			delay = false;
		}, 800);
		currentPage++;
	}
};

const init = () => {
	html.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
};
