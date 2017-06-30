$(document).ready(function(){

  var modalContent={
    'myBtn1' : {
                  'heading' : 'workshop1',
                  'imgSrc'  : 'logo.png',
                  'content' : 'workshop1 w hop1 woshop1 shop1 wo'
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
                    },
        'myBtn7' : {
                      'heading' : 'workshop7',
                      'imgSrc'  : 'logo.png',
                      'content' : 'workshop7'
                 },
        'myBtn8' : {
                      'heading' : 'workshop8',
                      'imgSrc'  : 'logo.png',
                      'content' : 'workshop8'
                    },
        'myBtn9' : {
                      'heading' : 'workshop9',
                      'imgSrc'  : 'logo.png',
                      'content' : 'workshop9'
                    }
};
  $('.workshop_cont').click(function(){
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
