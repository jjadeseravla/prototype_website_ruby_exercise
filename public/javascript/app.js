/*global $ */
$(document).ready(function(){

  var tabs = ['contact', 'about', 'prototype'];

  function eventHandler(event){
    event.preventDefault();
    tabs.forEach(function(item){
      if(event.currentTarget.id === item){
        $('#' + item).addClass('active');
        $('.'+item).removeClass('hidden');
      } else {
        $('#' + item).removeClass('active');
        $('.' + item).addClass('hidden');
      }
    });
  }

  $('#prototype').click(eventHandler);
  $('#about').click(eventHandler);
  $('#contact').click(eventHandler);

});

/* global $ */
// $(document).ready(function(){
//
//     $('#prototype').click(function(e){
//         e.preventDefault();
//         $('#contact, #about').removeClass('active');
//         $('#prototype').addClass('active');
//         $('.contact, .about').addClass('hidden');
//         $('.prototype').removeClass('hidden');
//     });
//
//     $('#about').click(function(e){
//         e.preventDefault();
//         $('#about').addClass('active');
//         $('#prototype, #contact').removeClass('active');
//         $('.about').removeClass('hidden');
//         $('.prototype, .contact').addClass('hidden');
//     });
//
//     $('#contact').click(function(e){
//         e.preventDefault();
//         $('#contact').addClass('active');
//         $('#prototype, #about').removeClass('active');
//         $('.contact').removeClass('hidden');
//         $('.about, .prototype').addClass('hidden');
//     });
// });
