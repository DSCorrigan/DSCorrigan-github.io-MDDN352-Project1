$(document).ready(function(){
  $('#fixedbar').on('click', function(e) {
    e.preventDefault();
  });
  
  $(window).on('scroll',function() {
    var scrolltop = $(this).scrollTop();
 
    if(scrolltop >= 500) {
      $('#fixedbar').fadeIn(250);
    }
    
    else if(scrolltop <= 500) {
      $('#fixedbar').fadeOut(250);
    }
  });
});