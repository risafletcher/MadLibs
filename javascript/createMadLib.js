function libIt() {
	let storyDiv = document.getElementById("story");
	let name = document.getElementById("name").value;
	let adjective = document.getElementById("adjective").value;
	let noun = document.getElementById("noun").value;
	storyDiv.innerHTML = `${name} married a ${adjective} ${noun} ... So weird!`;
}

let libButton = document.getElementById('lib-button');
libButton.addEventListener('click', libIt);
