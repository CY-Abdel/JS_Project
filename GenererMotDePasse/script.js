const passwordOutput = document.getElementById('password-output');
const dataLowercase = "abcdefghijklmnopqrstuvwxyz".split('');
const dataUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const dataNumbers = "0123456789".split('');
const dataSymbols = "!#$%&*+,-./:;<=>|?@^_~".split('');

console.log(dataLowercase);
console.log(dataUppercase);
console.log(dataNumbers);
console.log(dataSymbols);

// LA FUNC QIU GENERE LE PASSWORD
function generatePassword() {

    // ON CREE LE TABLEAU DE DATA QUI VA INCLURE SEULEMENT LES DATA DES CHECKBOXS COCHEZ
    const data = [].concat(
        lowercase.checked ? dataLowercase : [],
        uppercase.checked ? dataUppercase : [],
        numbers.checked ? dataNumbers : [],
        symbols.checked ? dataSymbols : []
    )
    console.log("data = " + data);

    // ON RECUPERE LA TAILLE DU MOT DE PASSE
    // et parseInt pour le mettre ON VALEUR NUMERIQUE ET NON UN STRING
    let passwordLength = parseInt(document.getElementById('display-password-length').value);

    console.log("passwordLength = " + passwordLength);

    let newPassword = '';

    // DANS LE CAS OU ON N'A SELECTIONNER AUCUN CARACTERE ON AFFICHE UNE ALERTER  AU UTTLISATEUR
    if (data.length === 0) {
        passwordOutput.value = "?";
        alert('Veuillez sélectionner des critères !');
        return;
    }


    // LOOP SUR LA LENGTH QU'ON A CHOISI ENTRE 4 ET  24 DE NOTE INPUT RANGE
    for (let i = 0; i < passwordLength; i++) {
        newPassword += data[Math.floor(Math.random() * data.length)];
        console.log(newPassword);
    }
    console.log("newPassword = " + newPassword);

    passwordOutput.value = newPassword;

    // ON GENERANT LE PASSWORD IL SERA SELECTIONNER AUTOMATIQUEMENT
    passwordOutput.select();

    // LA METHODE execCommand EST OBSOLETE ET A ETE SUPPRIMER DU WEB FAUT PAS L'UTILISER 
    // document.execCommand('copy');
    document.execCommand('copy');
    // generateButton = document.getElementById('generateButton');

    // ON AFFICHE UN MESSAGE QUI DIT QUE LE MDP A ETE COPIE A LA PLACE DE GENERATE MDP
    generateButton.innerHTML = "MDP copié !";

    // ON REMET LE TEXTE INITIALE DU BUTTON APRE 1.5 s AVEC UN SETtIMEOUT  
    setTimeout(() => {generateButton.innerHTML = "Generate password"}, 1500);



}
