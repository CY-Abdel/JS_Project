// *************** SIDE-BAR ***********

const toggleButton = document.querySelector('#toggle-button');
const sidebar = document.getElementById('side-bar');

toggleButton.addEventListener('click', show);

function show() {
    sidebar.classList.toggle('active');
}

// Si ON CLIQUE SUR LE MAIN CONTENT ON RETIRE LA SIDEBAR
const content = document.querySelector('.content');

content.addEventListener('click', () => {
    sidebar.classList.remove('active');
} )
