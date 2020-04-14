let setAlarm = document.getElementById('setAlarm');

setAlarm.addEventListener('click', putAlarm);
var song = new Audio('aa.mp3');
function ringBell() {
    song.play();
    let place = document.getElementById('place');
    let str = `<div>
    <span>Alarm is ringing...</span>
  </div>`;
    place.innerHTML = str;
}

function putAlarm(e) {

    e.preventDefault();

    let alarm = document.getElementById('alarm');
    let alarmTime = new Date(alarm.value);
    console.log(`Setting alarm for ${alarmTime}`);
    let now = new Date();

    let timeToAlarm = alarmTime - now;
    if (timeToAlarm >= 0) {
        setTimeout(() => {
            ringBell();
        }, timeToAlarm);
    }
}
