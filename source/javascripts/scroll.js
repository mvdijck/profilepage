$( document ).ready(function() {

  $("#abt").click(function() {
   $('html,body').animate({
     scrollTop: $(".about-page").offset().top},
     'slow');
 });

  $("#wrk").click(function() {
   $('html,body').animate({
     scrollTop: $(".experience-page").offset().top},
     'slow');
 });

  $("#cntct").click(function() {
   $('html,body').animate({
     scrollTop: $(".contact-page").offset().top},
     'slow');
 });

});




