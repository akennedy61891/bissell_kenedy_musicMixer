(() => {
	console.log("javascript linked up");

	// set up variables first
	let musicicons = document.querySelectorAll('#musicIcons img');

	let dropDapper  = document.querySelector('.dzDapper'),
		dropDrum    = document.querySelector('.dzDrum'),
		dropGiraffe = document.querySelector('.dzGiraffe'),
		dropHair    = document.querySelector('.dzHair');

	let plain = document.querySelector('.plainSock'),
		dapper = document.querySelector('.dapper'),
		drum = document.querySelector('.drum'),
		giraffe = document.querySelector('.giraffe',)
		hair = document.querySelector('.hair');

	let dropzones = document.querySelectorAll('.drop-zone');

	function


	function initDrag() {
		musicicons.forEach(icon => icon.addEventListener('dragstart', function(e) {
				console.log('draggin...');

				e.dataTransfer.setData("text/plain", this.id);
			})
		);
	}

	initDrag();




	dropzones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("dragover...")
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
			console.log("dropped...")
		let iconDrop = e.target;
			while (iconDrop !== 0 && ! iconDrop.classList.contains("drop-zone")) {
				iconDrop = iconDrop.parentNode;
		}

		if (iconDrop && iconDrop.childNodes.length > 0) {
				return false;
				e.preventDefault();
			}
			let icon = e.dataTransfer.getData("text/plain");
		});
	});


})(); 
