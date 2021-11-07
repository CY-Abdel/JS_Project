const names = () => {
    let rememberMe = document.getElementById('rememberMe');
    let nameStorage = localStorage.getItem('nom');

    if(nameStorage == null) {
        rememberMe.innerHTML = "Bonjour a toi, je ne te connais pas encore, merci d'envoyer ton pseudo";
    } else {
        rememberMe.innerHTML = `Bonjour ${nameStorage}`;
    }
};

const visit = () => {
    let visitDisplay =document.getElementById('visitDisplay');
    let visitCount = localStorage.getItem('visites');

    visitCount++;
    localStorage.setItem('visites', visitCount);
    visitDisplay.innerHTML = `Nombre de visites : ${visitCount}`;
}

function setData() {
    let pseudo = document.getElementById('pseudo').value;
    localStorage.setItem('nom', pseudo);
}

names();
visit();