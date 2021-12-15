
function playKey(event){
	var audio = new Audio('./audio/key-'+ event.currentTarget.id +'.mp3');
	audio.play();
}
(()=> {
	document.querySelectorAll('.key').forEach(item => item.addEventListener('click', playKey))
})()
