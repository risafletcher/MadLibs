function getInputValue(inputId) {
	return document.getElementById(inputId).value;
}

function getElement(elementId) {
	return document.getElementById(elementId);
}

function libIt() {
	let storyDiv = getElement('story');
	let name = getInputValue('noun');
	let adjective = getInputValue('adjective');
	let noun = getInputValue('name');

	let sentence1 = `${name} is a very ${adjective} ${noun}! `;
	let sentence2 = `${name} is a very ${adjective} ${noun}!`;

	storyDiv.innerHTML = sentence1 + sentence2;
}
