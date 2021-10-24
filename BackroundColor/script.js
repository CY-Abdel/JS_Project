

setInterval(changeBG,800);
// setTimeout(changeBG);

function changeBG() {
    const col1 = getRandomRGB();
    const col2 = getRandomRGB();
    const col3 = getRandomRGB();

    const colorString = `rgb(${col1}, ${col2}, ${col3})`;
    document.body.style.background = colorString;
    document.getElementById('color').innerHTML = colorString;
}





// OBTENIR DES CHIFFRES RANDOM ENTRE 0 ET 256
// Math.FLOOR PREND LA VALEUR INFERIEUR SANS LA VIRGULE
function getRandomRGB () {
    return Math.floor(Math.random() *256)
}

