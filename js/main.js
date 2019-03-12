//create jar, name jar, place string in jar
//var firstName = "Alex";

//alert is method(build in function in JS)
//alert("Hello" + firstName);

//modern JS
//alert(`Hello ${firstName}`)

console.log("javascript linked up");


	let musicicons = document.querySelector('#musicIcons');
	let plain = document.querySelector('.plainSock'),
		dapper = document.querySelector('.dapper'),
		drum = document.querySelector('.drum'),
		giraffe = document.querySelector('.giraffe',)
		hair = document.querySelector('.hair');
	let dropzones = document.querySelector('.drop-zone');





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
