function onLoad(arg) {
  document.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
      toggleFullScreen();
    }
  });

  // touch devices have no enter key — tapping anywhere starts the interface
  window.addEventListener('click', startOnTap);
  window.addEventListener('touchend', startOnTap);

  document.querySelectorAll('.key').forEach(function(key) {
    key.addEventListener('pointerdown', function(e) {
      e.preventDefault();
      playNote(parseInt(key.dataset.key, 10));
    });
  });
}

function startOnTap(e) {
  const enterText = document.querySelector('.enter-text');
  if (enterText.classList.contains('nodisplay')) return;
  if (e.target.closest && e.target.closest('a')) return;
  toggleFullScreen();
}

function playNote(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;

  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (key) {
    key.classList.add('playing');
    setTimeout(function() { key.classList.remove('playing'); }, 150);
  }

  audio.currentTime = 0; //resets the playhead
  audio.play();
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    // document.getElementById('monitor').webkitRequestFullscreen();

    function launchIntoFullscreen(element) {
      if(element.requestFullscreen) {
        const request = element.requestFullscreen();
        if (request && request.catch) request.catch(function() {});
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
    launchIntoFullscreen(document.documentElement);
  }
  document.querySelector('#monitor').style.backgroundColor="#161913";
  const nodisplays = document.querySelectorAll('.nodisplay');
  nodisplays.forEach(nodisplay => nodisplay.classList.remove('nodisplay'));

  document.querySelector('.enter-text').classList.add('nodisplay');
  document.querySelector('.background-image').classList.add('nodisplay');

  const promptKey = document.querySelector('.prompt-key');
  promptKey.innerHTML = "B C F E";
  promptKey.innerHTML += "\tB C E D";
  promptKey.innerHTML += "\tB C F E D C";
}
