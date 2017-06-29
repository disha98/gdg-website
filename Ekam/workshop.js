$(document).ready(function(){

  var modalContent={
    'myBtn1' : {
                  'heading' : 'workshop1',
                  'imgSrc'  : 'logo.png',
                  'content' : 'workshop1'
               },
     'myBtn2' : {
                  'heading' : 'workshop2',
                  'imgSrc'  : 'logo.png',
                  'content' : 'workshop2'
                },
      'myBtn3' : {
                    'heading' : 'workshop3',
                    'imgSrc'  : 'logo.png',
                    'content' : 'workshop3'
                },
      'myBtn4' : {
                      'heading' : 'workshop4',
                      'imgSrc'  : 'logo.png',
                      'content' : 'workshop4'
                 },
        'myBtn5' : {
                      'heading' : 'workshop5',
                      'imgSrc'  : 'logo.png',
                      'content' : 'workshop5'
                    },
        'myBtn6' : {
                      'heading' : 'workshop6',
                      'imgSrc'  : 'logo.png',
                      'content' : 'workshop6'
                    }
};
  $('.workshop_button').click(function(){
    var id_clicked = this.id;
    $('.workshop_modal_textcontent').html(modalContent[id_clicked]['content']);
    $('.workshop_modal_heading').html(modalContent[id_clicked]['heading']);
    $('.workhop_modal_img').attr('src' , modalContent[id_clicked]['imgSrc']);
    $('.workshop_modal').css('display' , 'block');
  });

  $('#close').on('click' , function(){
    $('.workshop_modal').css('display' , 'none');
  });


});
