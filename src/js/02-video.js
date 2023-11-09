import Player from '@vimeo/player';

const iframe = document.querySelector('vimeo-player');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

const currentMoment = player.on('timeupdate', function () {
  console.log('play the video!');
  localStorage.setItem(CURRENT_TIME, JSON.stringify());
});
