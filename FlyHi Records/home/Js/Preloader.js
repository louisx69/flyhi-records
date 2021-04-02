




$(function() {

  setTimeout(function() {
    $("page").show();
    $("preloader .upper-2").css("height", "0vh");
    $("preloader .downer").css("height", "0vh");
  }, 5000);

  setTimeout(function() {
    $("preloader").hide();
  }, 7000);;
});
