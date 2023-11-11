import throttle from 'lodash.throttle';

import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(onData, 1000));

player.setCurrentTime(localStorage.getItem(CURRENT_TIME));

function onData(data) {
  localStorage.setItem(CURRENT_TIME, JSON.stringify(data.seconds));
}
