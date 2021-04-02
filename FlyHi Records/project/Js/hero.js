



/*--------------- hero video | pause/play function --- start ------------*/


// get video element id
var heroVid = document.getElementById("hero-video");

// play video event
function playVid() {
    heroVid.pause();
}

// pause video event
function pauseVid() {
  heroVid.play();
}

var vid = '#hero-video';

$(vid).on('play', function() {
  $('.pause').show();
  $('.play').hide();
});

var vid = '#hero-video';

$(vid).on('pause', function() {
  $('.play').show();
  $('.pause').hide();
});



$('#hero-video').click(function(){this.paused?this.play():this.pause();});

/*--------------- hero video | pause/play function --- end ------------*/
