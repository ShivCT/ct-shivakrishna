const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// add class
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

// remove class
signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

