// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

// CArrusel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1}
    if (n < 1 ) {slideIndex =  slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += "active";
}

// Slide automático

/*var slideIndex = 0;
showSlides();

function showSlides(){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i= 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1
    }
    slides[slideIndex - 1 ].style.display = "block"
    setTimeout(showSlides, 100000);
    // Cambiar tiempo
}*/
// Slide automático cada 5 segundos
let timer = setInterval(function () {
    slideIndex++;
    showSlides(slideIndex);
  }, 5000);
var password = document.getElementById("userPassword")
        var confirmPassword = document.getElementById("confirmPassword");

          function validatePassword() {
            if (password.value !== confirmPassword.value) {
              confirmPassword.setCustomValidity("Las contraseñas no coinciden");
            } else {
              confirmPassword.setCustomValidity('');
            }
          }

          password.onchange = validatePassword;
          confirmPassword.onkeyup = validatePassword;