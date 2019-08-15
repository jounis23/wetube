const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeBtn");

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }
}

function handleVolumeClick() {
  if (videoPlayer.volume === 1) {
    videoPlayer.volume = 0;
    volumeBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
  } else {
    videoPlayer.volume = 1;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
}

function init() {
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
}

if (videoContainer) {
  init();
}
