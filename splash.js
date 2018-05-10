var e = document.getElementById("gif-img");
b = document.getElementById("gif");
count = 1;


function navigate() {
	window.setTimeout(function () {

		// Move to a new location or you can do something else
		window.location.href = "index.html";

	}, 3000);
}

function toggle_visibility() {

	if (e.style.display == 'block') {
		if (count % 2 == 0) {
			b.style.display = 'none';
			e.style.display = 'block';
			console.log('count');
		}

	} else {

		e.style.display = 'none';
		b.style.display = 'block';
		console.log('2nd')
		navigate();


	}
	count = count + 1;

}