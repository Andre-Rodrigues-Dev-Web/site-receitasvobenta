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

  
  