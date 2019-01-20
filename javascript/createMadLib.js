// this function will return our input values, aka,
// whatever we type in the input box
function getInputValue(inputId) {
	return document.getElementById(inputId).value;
}
// this function will just return our HTML element
function getElement(elementId) {
	return document.getElementById(elementId);
}

function libIt() {
	// here we are collecting the values for each input box
	// think of these variables as placeholders
	let name = getInputValue('noun');
	let adjective = getInputValue('adjective');
	let noun = getInputValue('name');
	// this is where we create our story
	// we wrap each text block with back ticks (`) so we can
	// combine our text and variables much easier
	// notice how each variable (aka placeholder) is wrapped in ${}
	let sentence1 = `${name} is a very ${adjective} ${noun}! `;
	let sentence2 = `${name} is a very ${adjective} ${noun}!`;
	// here we are getting our 'story' container and
	// assigning it to storyDiv
	let storyDiv = getElement('story');
	// inside our story div, aka its innerHTML, we want to
	// insert our text blocks
	storyDiv.innerHTML = sentence1 + sentence2;
}
