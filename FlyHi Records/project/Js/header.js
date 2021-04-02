/*--------------- nav hover animation --- start ---------*/
$('#nav .about').hover(function() {
  $(this).css("color", "grey");
}, function() {
  $(this).css("color", "white");
});

$('#nav .reel').hover(function() {
  $(this).css("color", "grey");
}, function() {
  $(this).css("color", "white");
});
/*--------------- nav hover animation --- end ---------*/





/*--------------- work cta animation --- start ---------*/
$('#work-cta').hover(function() {
  $('.dot').css("height", "5px");
  $('.dot').css("width", "5px");

  $('.dot').css("bottom", "52.5px");
  $('.dot').css("left", "67.5px");

  $('.wcta-hil').css("margin-bottom", "0px")
  $('.wcta-hil').css("margin-top", "200px")

  $('.work.text').fadeIn('slow');
}, function() {
  $('.dot').css("height", "6.5px");
  $('.dot').css("width", "6.5px");

  $('.wcta-hil').css("margin-bottom", "165px")
  $('.wcta-hil').css("margin-top", "165px")

  $('.dot.dot-one').css("bottom", "45px");
  $('.dot.dot-one').css("left", "60px");
  $('.dot.dot-two').css("bottom", "45px");
  $('.dot.dot-two').css("left", "75px");
  $('.dot.dot-three').css("bottom", "60px");
  $('.dot.dot-three').css("left", "60px");
  $('.dot.dot-four').css("bottom", "60px");
  $('.dot.dot-four').css("left", "75px");

  $('.work.text').fadeOut('fast');

});



$('#work-cta').click(function() {

  setTimeout(function() {
    $("#logo-wrapper").fadeOut('slow');
    $("#nav").fadeOut('slow');
    $(".wcta-wrapper").hide();
    $(".sidebar").fadeOut('slow');
    $("#hero").fadeOut('slow');
    $("").fadeOut('slow');
    $("").fadeOut('slow');
    $("").fadeOut('slow');
  }, 600);

  setTimeout(function() {
    $("#work-cta").fadeOut('slow');
  }, 1900);

  setTimeout(function() {
    window.location.href = "";
  }, 3000);

});
/*--------------- work cta animation --- end ---------*/





/*--------------- header sticky pop animation --- start ---------*/

$(window).on('scroll', function() {

  if ($(this).scrollTop() > 20) {

    $("header").css("background-color", "transparent")

  } else {

    $("header").css("background-color", "transparent")

  }
});
/*--------------- header sticky pop animation --- end ---------*/
