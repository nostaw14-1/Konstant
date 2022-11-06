function openNav() {
	document.getElementById("mySidenav").style.width = "20%";
	document.getElementById("main").style.marginLeft = "20%";
}
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}

	// Open the Modal
function openModal() {
	const modal = document.getElementById("myModal")
	modal.style.display = "block";
	let initOpacity = 0.1;
	const timer = setInterval(function () {
		if (initOpacity >= 1) {
			clearInterval(timer);
		}
		modal.style.opacity = initOpacity;
		modal.style.filter = 'alpha(opacity=' + initOpacity * 100 + ")";
    initOpacity += initOpacity * 0.1;
  }, 1);
}

// Close the Modal
function closeModal() {
  var fadeTarget = document.getElementById("myModal");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0.05) {
            fadeTarget.style.opacity -= 0.05;
		} else {
            clearInterval(fadeEffect);
			fadeTarget.style.display = "none";
        }
    }, 10);
	
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function hover(e) {
		var boxArtSrc = document.getElementById("image");
		boxArtSrc.setAttribute('src', e);
		boxArtSrc.className = "imageClassWhenHover";
	}
		function unhover(e) {
		var boxArtSrc = document.getElementById("image");
		boxArtSrc.setAttribute('src', e);
		boxArtSrc.className = "imageNonDiv";
	}

function animateLeft() {
	document.getElementById("slide").className = 'mySlides animateleft';
}

function animateRight() {
	document.getElementById("slide").className = 'mySlides animateright';
}
function animateLeft2() {
	document.getElementById("slide2").className = 'mySlides animateleft';
}

function animateRight2() {
	document.getElementById("slide2").className = 'mySlides animateright';
}
function animateLeft3() {
	document.getElementById("slide3").className = 'mySlides animateleft';
}

function animateRight3() {
	document.getElementById("slide3").className = 'mySlides animateright';
}
function animateLeft4() {
	document.getElementById("slide4").className = 'mySlides animateleft';
}

function animateRight4() {
	document.getElementById("slide4").className = 'mySlides animateright';
}
function animateLeft5() {
	document.getElementById("slide5").className = 'mySlides animateleft';
}

function animateRight5() {
	document.getElementById("slide5").className = 'mySlides animateright';
}