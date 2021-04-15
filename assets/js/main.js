// Header nav 
// Const for the nav
const menu = document.getElementsByClassName("menu");
const link = document.getElementsByClassName("link-nav");
let selected = document.getElementsByClassName("selected");
// Apply style for the nav
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function() {
        selected[0].className = selected[0].className.replace(" selected", "");
    this.className += " selected";
    console.log('selected')
    });
  }



// Slider avis customer

let slideIndex = 1;
dotSlides(slideIndex);

function currentSlide(n) {
  dotSlides(slideIndex = n);
}

function dotSlides(n) {
  let i;
  let slides = document.getElementsByClassName("customer");
  let dots = document.getElementsByClassName("slider-button");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" select", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " select";
}