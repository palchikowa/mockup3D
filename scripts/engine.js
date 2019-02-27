var log = console.log;


var mockup = document.querySelector('.cd-product-mockup');
var startBtn = document.getElementById("start");
var closeBtn = document.querySelector("#close-btn");
var intro = document.querySelector('.cd-product-intro');


startBtn.addEventListener("click", showMockup, false);
closeBtn.addEventListener("click", showMockup, false);

function showMockup(){
	mockup.classList.toggle('cd-product-showMockup');
	closeBtn.classList.toggle('closed-up');
	intro.classList.toggle('driven');
}

