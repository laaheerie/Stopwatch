var time = 0;
var timer;

function start() {
	timer = setInterval(function() {
		time++;
		var minutes = Math.floor(time / 60000);
		var seconds = Math.floor((time % 60000) / 1000);
		var milliseconds = time % 1000;
		document.getElementById('time').innerHTML = minutes.toString() + ':' + (seconds < 10 ? '0' + seconds : seconds) + ':' + (milliseconds < 100 ? '0' + milliseconds : milliseconds < 10 ? '0' + (milliseconds / 10).toString() : (milliseconds / 10).toString());
	}, 10);
}

function stop() {
	clearInterval(timer);
}

function reset() {
	stop();
	time = 0;
	document.getElementById('time').innerHTML = '00:00:00';
}

document.getElementById('start').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);
document.getElementById('reset').addEventListener('click', reset);