window.onunload = function() {};

function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}

sizecheck();

$(function () {

  if (w > 481) {
} else { 
  $("header .drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('#global_nav').fadeToggle(200);
    });
  }
}); 