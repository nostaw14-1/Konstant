// JavaScript Document
function openNav() {
	document.getElementById("mySidenav").style.width = "25%";
	document.getElementById("main").style.marginLeft = "25%";
}
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
	
	
} 
function changeSlides() {
	setInterval("showSlides(slideIndex += 1)", 5000);
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