(() => {
	console.log("javascript linked up");

	// set up variables first
	let musicicons  = document.querySelectorAll('#musicIcons img');

	let dapAudio = new Audio('music/beat.mp3'),
	    drumAudio = new Audio('music/drums.mp3'),
	    girAudio = new Audio('music/piano.mp3'),
 	    hairAudio = new Audio('music/robot-voice.mp3');

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

	dropzones.forEach(dropzone => {
	dropzone.addEventListener('dragover', function(e){
		console.log('dragging over...')
		e.preventDefault();
})
});



	


	function playDapper(){
		dapAudio.currentTime = 0;
		dapAudio.loop = true;
		dapAudio.play();
	};

	one.addEventListener('drop', function(e){
	e.preventDefault();
	console.log('dropped dapper');
		dropDapper.classList.remove('invisible');
		playDapper();
});






	function playDrum(){
		drumAudio.currentTime = 0;
		drumAudio.loop = true;
		drumAudio.play();
	};

	two.addEventListener('drop', function(e){
	e.preventDefault();
	console.log('dropped drum');
		dropDrum.classList.remove('invisible');
		playDrum();
});






	function playGiraffe(){
		girAudio.currentTime = 0;
		girAudio.loop = true;
		girAudio.play();
	};

	three.addEventListener('drop', function(e){
	e.preventDefault();
	console.log('dropped giraffe');
		dropGiraffe.classList.remove('invisible');
		playGiraffe();
});




	function playHair(){
			hairAudio.currentTime = 0;
			hairAudio.loop = true;
			hairAudio.play();
		};

	four.addEventListener('drop', function(e){
	e.preventDefault();
	console.log('dropped hair');
		dropHair.classList.remove('invisible');
		playHair();
});





})(); 
