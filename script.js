// Select the DOM elements
const notepad = document.getElementById('notepad');
const saveButton = document.getElementById('saveButton');
const clearButton = document.getElementById('clearButton');

// Key to use in localStorage
const STORAGE_KEY = 'simpleNotepadContent';

// Load saved content when page loads
window.addEventListener('DOMContentLoaded', () => {
    const savedText = localStorage.getItem(STORAGE_KEY);
    if (savedText) {
        notepad.value = savedText;
    }
});

// Save the current content to localStorage
saveButton.addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEY, notepad.value);
    alert('Notes saved successfully!');
});

// Clear the textarea and localStorage
clearButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear your notes?')) {
        notepad.value = '';
        localStorage.removeItem(STORAGE_KEY);
    }
});
