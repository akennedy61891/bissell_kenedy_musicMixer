console.log("javascript linked up");

	const icons = ["one", "two", "three", "four"];

	let musicicons = document.querySelectorAll('#musicIcons img');
	let plain      = document.querySelector('.plainSock'),
		dapper     = document.querySelector('.dapper'),
		drum       = document.querySelector('.drum'),
		giraffe    = document.querySelector('.giraffe'),
		hair       = document.querySelector('.hair');
	let dropzones  = document.querySelector('.drop-zone');



	function initDrag() {
		musicicons.querySelectorAll('img').forEach(img => {
			// queryselectorall inspect img
			img.addEventListener("dragstart", function(e) {
				console.log('dragstart')
   		
	function removePlayingClass(event) {
			
	}

				e.dataTransfer.setData("text/plain", this.id);
				
	    });
	});
}





	dropzones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
             console.log('dragover')
		});

		zone.addEventListener("drop", function(e) {
			e.preventDefault();
             console.log('dragover')
			let iconDrop = e.target;
				while (iconDrop !== 0 && ! iconDrop.classList.contains("drop-zone")) {
				iconDrop = iconDrop.parentNode;
			}

			if (iconDrop && iconDrop.childNodes.length > 0) {
				return false;
				e.preventDefault();
			}
			let icon = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${piece}`));
		});
	});
