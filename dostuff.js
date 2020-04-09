
// Function (expression) to get all elements
const getElements = (s) => document.querySelector(s);

// Menu open on click
getElements('.open').addEventListener('click', () => {
    getElements('.navbar-list').classList.add('active');
});

// Close menu on click
getElements('.close').addEventListener('click', () => {
    getElements('.navbar-list').classList.remove('active');
});