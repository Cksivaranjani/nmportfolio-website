// Adding a toggle to the title
const title = document.getElementById('title');

// Add event listener to toggle the 'highlight' class
title.addEventListener('click', () => {
    title.classList.toggle('highlight');
});

// Functionality to add elements to the DOM
const contentDiv = document.getElementById('content');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', () => {
    const newElement = document.createElement('div');
    newElement.className = 'new-element';
    newElement.textContent = 'This is a new element';
    contentDiv.appendChild(newElement);
});

// Functionality to remove elements from the DOM
const removeBtn = document.getElementById('removeBtn');

removeBtn.addEventListener('click', () => {
    if (contentDiv.lastElementChild) {
        contentDiv.removeChild(contentDiv.lastElementChild);
    }
});
