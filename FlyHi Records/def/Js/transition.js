


/* Preload trasition --- start --- */

$(window).on('load', function () {

  setTimeout(function() {
    $("transition-preload .layer-1").css("right", "100vw");
    $("page").show();
  }, 900);

  setTimeout(function() {
    $("transition-preload .layer-2").css("right", "100vw");
  }, 2300);

});
/* Preload trasition --- end --- */



/* afterlick trasition animation --- start --- */

$("a").click(function() {

  setTimeout(function() {
    $("transition-afterclick .layer-1").css("right", "0");
  }, 300);

  var href = $(this).attr('href');

  setTimeout(function() {
    window.location = href
  }, 1200);

  return false;
});
/* afterlick trasition animation --- end --- */
