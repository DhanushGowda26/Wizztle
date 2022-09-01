		let slideIndex = 0;
		let slideTimer;
		const slideDelay = 10;
		const slides = document.getElementsByClassName("slide");
		const pills = document.getElementsByClassName("pill");
		const bar = document.getElementsByClassName("progress");

		ShowSlide = (index) => {
		if (index == slides.length)
			slideIndex = 0;
		else if (index < 0)
			slideIndex = slides.length-1;
		else
			slideIndex = index;
		
		for (i=0; i< slides.length; i++) {
			slides[i].style.display = "none";
			pills[i].classList.remove("active");
		}
		
		SlideReset();
		slides[slideIndex].style.display = "block";
		pills[slideIndex].classList.add("active");
		}

		SlideReset = () => {
		window.clearInterval(slideTimer);
		
		bar[0].style.animation = null;
		
		setTimeout(function(){
			bar[0].style.animation = "progression linear " + (slideDelay-.11) + "s";
		
			slideTimer = window.setInterval(function(){
			ShowSlide(slideIndex+=1);
			}, slideDelay*1000);
		},10);
		}

		for (i=0;i<pills.length;i++) {
		pills[i].addEventListener("click", function(){
			let si = this.getAttribute("data-index");
			ShowSlide(Number(si));
		})
		};

		neg.addEventListener("click", function(){
		ShowSlide(slideIndex-=1);
		});
		pos.addEventListener("click", function(){
		ShowSlide(slideIndex+=1);
		});

		ShowSlide(slideIndex);

		// menu

		function myFunction() {
			var x = document.getElementById("myDIV");
			if (x.style.display === "none") {
			x.style.display = "block";
			} else {
			x.style.display = "none";
			}
		}

		// card slider

		var cardContainer = document.getElementById('card-container')
var cardSlider = document.getElementById('card-slider');
var cardSlides = document.getElementsByClassName('card-slide').length;
var cardButtons = document.getElementsByClassName('card-btn');


var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = cardSlides - slidesPerPage;
var containerWidth = cardContainer.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = cardContainer.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = cardSlides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    cardSlider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        cardButtons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        cardButtons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        cardButtons[1].classList.add('inactive');
    }
}

setParams();

function cardSlideRight() {
    if (currentPosition != 0) {
        cardSlider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        cardButtons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        cardButtons[1].classList.remove('inactive');
    }
};

function cardSlideLeft() {
    if (currentPosition != slidesCount) {
        cardSlider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        cardButtons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        cardButtons[0].classList.remove('inactive');
    }
};


		// filter

		function myFilterFunction() {
			var x = document.getElementById("myFilter");
			if (x.style.display === "none") {
			x.style.display = "block";
			} else {
			x.style.display = "none";
			}
		}

		