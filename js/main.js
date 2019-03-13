(() => {
	console.log("javascript linked up");

	// set up variables first
	let musicicons = document.querySelectorAll('#musicIcons img');

	let plain = document.querySelector('.plainSock'),
		dapper = document.querySelector('.dapper'),
		drum = document.querySelector('.drum'),
		giraffe = document.querySelector('.giraffe',)
		hair = document.querySelector('.hair');

	let dropzones = document.querySelector('.drop-zone');

	function initDrag() {
		musicicons.forEach(icon => icon.addEventListener('dragstart', function(e) {
				console.log('draggin...');

				e.dataTransfer.setData("text/plain", this.id);
			})
		);
	}

	initDrag();


})();
