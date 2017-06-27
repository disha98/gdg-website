$(document).ready(function(){

  $('.title').click(function(){
    $('#modal').css('display' , 'block');
  });

  $('#close').on('click' , function(){
    $('#modal').css('display' , 'none');
  });


});
