(() => {
	console.log("javascript linked up");

	// set up variables first
	let musicicons  = document.querySelectorAll('#musicIcons img');

	// let dapAudio = new Audio('music/beat.mp3'),
	//     drumAudio = new Audio('music/drums.mp3'),
	//     girAudio = new Audio('music/piano.mp3'),
 // 	    hairAudio = new Audio('music/robot-voice.mp3');

	let dropDapper  = document.querySelector('.dzDapper'),
		dropDrum    = document.querySelector('.dzDrum'),
		dropGiraffe = document.querySelector('.dzGiraffe'),
		dropHair    = document.querySelector('.dzHair');

	let dapper      = document.querySelector('.dapper'),
		drum        = document.querySelector('.drum'),
		giraffe     = document.querySelector('.giraffe',)
		hair        = document.querySelector('.hair');

	let fdapper     = document.getElementById('one'),
	    fdrum       = document.getElementById('two'),
	    fgiraffe    = document.getElementById('three'),
	    fhair       = document.getElementById('four');

	let dropzones   = document.querySelectorAll('.drop-zone');







	function drag() {
	dropzones.querySelectorAll('img').forEach(img =>{
		img.addEventListener('dragstart', function(e){
			console.log('dragging...');
			e.dataTransfer.setData('text/plain', this.id);
		});
	});
}

	dropzones.addEventListener('dragover', function(e){
		e.preventDefault();
		console.log('dropping?')
});







	one.addEventListener('drop', function(e){
	e.preventDefault();
	console.log('dropped dapper');
		dropDapper.classList.remove('invisible');
		// playDapper();
});


	two.addEventListener('drop', function(e){
	e.preventDefault();
	console.log('dropped drum');
		dropDrum.classList.remove('invisible')
		// playDrum();
});


	three.addEventListener('drop', function(e){
	e.preventDefault();
	console.log('dropped giraffe');
		dropGiraffe.classList.remove('invisible')
		// playGiraffe();
});


	four.addEventListener('drop', function(e){
	e.preventDefault();
	console.log('dropped hair');
		dropHair.classList.remove('invisible')
		// playHair();
});





})(); 
