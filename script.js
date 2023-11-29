let slideIndex = 1;
showSlides(slideIndex, "mySlides");
showSlides(slideIndex, "heroSlides");

// Next/previous controls
function plusSlides(n, className) {
  showSlides((slideIndex += n), className);
}

function showSlides(n, className) {
  let i;
  let slides = document.getElementsByClassName(className);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
