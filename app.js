document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('p').forEach(paragraph => {
      paragraph.innerHTML = paragraph.innerHTML.replace(/\[\d+\]/g, '');
    });
  });


  var currentAudio = null;
  var canPlayNewAudio = true;

  function playPreview(songPath, button) {
    if (!canPlayNewAudio) {
      return;
    }

    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
      canPlayNewAudio = false;
    }

    var audio = new Audio(songPath);
    audio.play().then(function () {
      audio.focus();
      audio.volume = 0.1;

      setTimeout(function () {
        audio.pause();
        currentAudio = null;
        canPlayNewAudio = true;
      }, 5000);
    });

    currentAudio = audio;
    button.audio = audio;
  }