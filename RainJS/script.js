const body = document.body;

setInterval(rainfall, 10);

function rainfall() {
    const waterDrop = document.createElement('i');

    waterDrop.classList.add('fas');
    waterDrop.classList.add('fa-tint');
    waterDrop.style.fontSize = (Math.random() * 7  + .5 )+ 'px';
    waterDrop.style.animationDuration = Math.random() * 2 + 's';
    waterDrop.style.opacity = Math.random() + 0.3  ;
    // pour faire un drop aleatoire des goute de eau
    // on multiplie math.random ( entre 0 et 1) fois la largeur de la window
    // au lieu d'avoir les goutes au milieu de l'ecren elle seront reparties
    waterDrop.style.left = Math.random() * window.innerWidth + 'px';
    
    
    body.appendChild(waterDrop);

    // pour ne pas charger avec les elements creer
    // on stop avec un setTimeout
    // apres 6s on tue chaque element creer sionon on aura une infinite de waterDrop
    setTimeout(() => {
        waterDrop.remove();
    }, 6000);
}
