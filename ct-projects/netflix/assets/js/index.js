const options = document.querySelectorAll('.tab-item');
const optionsContent = document.querySelectorAll('.opt-content-item');


function selectItem(e) {

	// Remove border classes
	removeBorder();
	removeShow();

	// Add border 

	this.classList.add('tab-border');

	
	const tabContentItem = document.querySelector(`#${this.id}-content`);

	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders 

function removeBorder() {
	options.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class

function removeShow() {
	optionsContent.forEach(item => {
		item.classList.remove('show');
	});
}

// Event listner 
options.forEach(item => {
	item.addEventListener('click', selectItem);
});
