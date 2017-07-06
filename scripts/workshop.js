$(document).ready(function(){

  var modalContent={
    'myBtn1' : {
                  'heading' : 'Manipal University Summer Of Code',
                  'imgSrc'  : "./static/workshop_musoc.jpg",
                  'content' : 'Manipla University Summer of Code is blah blah blah blah'
               },
     'myBtn2' : {
                  'heading' : 'Google Cloud Next',
                  'imgSrc'  : './static/workshop_cloud_next.jpg',
                  'content' : 'Super Dev meets is a wokshop where students were taught the basics of android development'
                },
      'myBtn3' : {
                    'heading' : 'Super Dev Meets',
                    'imgSrc'  : './static/workshop_superdev_meets.jpg',
                    'content' : 'Super Dev meets is a wokshop where students were taught the basics of android development'
                },
      'myBtn4' : {
                     'heading' : 'Angular JS Workshop',
                      'imgSrc'  : './static/workshop_angularjs.png',
                      'content' : 'workshop3'
                 },
        'myBtn5' : {
                      'heading' : 'GDG Dev Fest \'16',
                      'imgSrc'  : './static/workshop_devfest.png',
                      'content' : 'workshop5'
                    },
        'myBtn6' : {
                      'heading' : 'GDG Dev Meet',
                      'imgSrc'  : './static/workshop_dev_meet.jpg',
                      'content' : 'workshop6'
                    },
        'myBtn7' : {
                       'heading' : 'Git Workshop',
                       'imgSrc'  : './static/workshop_git_workshop.jpg',
                       'content' : 'workshop8'
                 },
        'myBtn8' : {
                       'heading' : 'Node JS Workshop',
                       'imgSrc'  : './static/workshop_nodejs.jpg',
                        'content' : 'A workshop on Node.Js which introduced people to the MEAN stack.'
                    },
        'myBtn9' : {
                      'heading' : 'HTML And Javascript Workshop',
                      'imgSrc'  : './static/workshop_webdev.png',
                      'content' : 'Two day workshop on HTML5 and JavaScript. Learning the basics of web development which serves as backbone for other Google Technologies. Google goodies were up for grabs.'
                    },
        'myBtn10' : {
                      'heading' : 'Polymer Hackathon',
                      'imgSrc'  : './static/workshop_polymer_hackathon.png',
                      'content' : 'Held session on Polymer, the web framework by Google and submission for web apps. The participants submitted 11 web apps in total and were adjudged on the following criteria-Best UI, Best Idea and Best App.'
                   },
        'myBtn11' : {
                       'heading' : 'Android Wear Hackathon',
                       'imgSrc'  : './static/workshop_androidwear_hackathon.jpg',
                       'content' : 'The Hackathon was divided in two parts Android Hack and Wear Hack, with main focus on wear. The app idea could belong to any of the app categories available on the play store. Brownie points awarded to apps focusing on Education, Health, Information Access, Women Security, Disaster Management'
                    },
        'myBtn12' : {
                        'heading' : 'Google Cloud Platfrom And Introduction to WTM',
                        'imgSrc'  : './static/workshop_wtm_cloudnext.jpg',
                        'content' : 'Introduction to Google Cloud as a platform to host mobile apps and using App Engine for backend. Also had a one hour introduction of GDG Women Community.'
                                }
};
  $('.workshop_cont').click(function(){
    var id_clicked = this.id;
    $('.workshop_modal_textcontent').html(modalContent[id_clicked]['content']);
    $('.workshop_modal_heading').html(modalContent[id_clicked]['heading']);
    $('.workshop_modal_img').attr('src' , modalContent[id_clicked]['imgSrc']);
    $('.workshop_modal').css('display' , 'block');
    $('#home_section').css('display' , 'none');
  });

  $('#close').on('click' , function(){
    $('.workshop_modal').css('display' , 'none');
  });


});
