'use strict';

// Variables

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

// Event Listeners

// Show modal
openBtn.addEventListener('click', function() {

    modalContainer.style.display = 'block';
})

// Hide modal
closeBtn.addEventListener('click', function() {

    modalContainer.style.display = 'none';
})


// Close modal by clicking anywhere in window
window.addEventListener('click', function(e) {

    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
})