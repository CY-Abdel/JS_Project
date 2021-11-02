const cube = document.querySelector('.cube');
const container = document.querySelector('.cube-container');

// TURN CUBE ON MOUSEMOVE
container.addEventListener('mousemove', (e) => {
    // console.log(e);

    rotY = e.clientX;
    rotZ = e.clientY;
    console.log('rotY = ' + rotY + " / rotZ = " + rotZ);


    cube.style.animation = 'none';
    cube.style.transform = 'rotateY(' + rotY + 'deg) rotateZ(' + rotZ + 'deg)';
    cube.style.transition = '.5s ease-out';

    container.addEventListener('mouseleave', () => {
        cube.style.animation = "spin 1500s infinite linear";
    });
});

// TURN THE CUBE WITH ARROWS
document.body.addEventListener('click', function (e) {
    // SHOW ONE SIDE FROM THE CUBE ON CLICK ON ARROW (RANDOM FACE)
    const classes = ['front', 'top', 'bottom', 'right', 'left', 'back'];

    classToUse = classes[Math.floor(Math.random() * classes.length)];
    console.log(classToUse);

    // ASSURER QUE LA CLASSES Ne4EST PA LA MEME DEUX FOIS SUITE AVEC LE MATH.RANDOM()
    if (cube.classList.contains(classToUse)){
        classToUse = classes[Math.floor(Math.random() * classes.length)];
    }
    console.log(classToUse);


    // pour AFFICHER UNE FACE AU HASARD
    if (e.target.classList.contains('arrow')) {
        cube.classList.remove('front', 'top', 'bottom', 'right', 'left', 'back');
        cube.style.animation = 'none';
        cube.classList.add(classToUse);
        cube.style.transition = '1.2s ease';
    };
});

// REMETTRE L'ANIMATION SI ON QUITTE L'ARROW
document.querySelectorAll('.arrow').forEach(item => {
    // FOREACH ITEM == CHAQUE ELEMENT AVEC UNE CLASSE ARROW
    item.addEventListener('mouseleave', () => {
        cube.style.animation = "spin 1500s infinite linear";
        cube.classList.remove('front', 'top', 'bottom', 'right', 'left', 'back');
    })
})
