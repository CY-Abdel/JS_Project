const darkMode = document.getElementById('dark-mode');

// on met cchange car c'esy yne checkbox
darkMode.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})