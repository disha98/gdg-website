
$(document).ready(function(){
  
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
      
        window.location.hash = hash;
      });
    } 
  });
});

$(document).scroll(function () {
  
  // parallaxing
  var $movebg = $(window).scrollTop() * -0.18;
  $('.portion').css('background-positionY', ($movebg) + 'px');
});