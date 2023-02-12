$('.recipe-card').hover(function() {
    $(this).animate({
      boxShadow: '0 10px 20px rgba(0,0,0,0.3)'
    }, 200);
  }, function() {
    $(this).animate({
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }, 200);
});
//Active li
$(document).ready(function(){
    $(".link").click(function(){
      $(".link").removeClass("active");
      $(this).addClass("active");
    });
});
//Carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = $(".slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides.eq(i).hide();  
  }
  slides.eq(slideIndex-1).show();  
}

  
  