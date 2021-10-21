// les variables
console.log(" ****** LES VARIABLES ******");
let cours = " kjdfhjkdfh ";
console.log(cours + '  // avant MAj');

cours = 'coucou'
console.log(cours + ' // après Maj');

const prenom = 'youva';
console.log(prenom);

// function
console.log("\n********* LES FUNCTIONS *******");
function toDo() {
    console.log('afficher un truc');
}

    // la funvtion fleché
const faireUneTache = () => {
    console.log('j\'ai effectuer une fonction');
}

const faireUneTache2 = (type) => {
    console.log('je fais : ' + type);
}
faireUneTache()
faireUneTache2("la vaisselle")
faireUneTache2("du sport")
toDo();

// DOM
console.log("\n************ LE DOM **********");

// ************ click Event ************************

// ici on a deux façon != de selectionner les element avec 1 #id
// les deux fonctionne et donnent le meme resultat
const btn = document.querySelector('#btn')
const img = document.getElementById('img')

// ancien JS
// btn.addEventListener('click', function() {})

//nouveau JS
btn.addEventListener('click', () => {
    console.log('yes ! ça marche');
    // on inject une classe (show) qu'on va creer sur le CSS 
    //pas besoin de la defenir ds html ou ailleurs
    
    // on utilise la class add pour ajouter et remove pour supprimer
    // mais nous on veut ajouter si elle est cacher et enlever si elle est activer
    // img.classList.add('show')

    // on utilsera donc la classe toggle
    img.classList.toggle('show')
})

// ******************* mouseEvent *******************

const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
    
mouseEvent.addEventListener('mousemove', (e) => {
    console.log('mouseEvent ça marche !');
    console.log(e);
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";

    // filtre FLOU avec blur
    if (e.x > 550) {
        document.body.style.filter = "blur(3px)";
    } else {
        document.body.style.filter = "none";
    }
})

// *********************** input *********************

document.getElementById('input').addEventListener('input', (e) => {
    console.log(e.target.value);
    vertical.innerHTML = e.target.value;
})

// *********************** Theme Color *********************

const theme = document.querySelectorAll('.theme');

theme.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target.id);
        // mais on doit retirer les classe achaque fois qu'on clique sur une couleur
        // sinon toute les classes seront ajouter et il y aura pas de changement de theme
        document.body.classList.remove('darkTheme', 'salmonTheme', 'yellowTheme')
        
        switch (e.target.id) {
            case "dark" : 
                document.body.classList.add('darkTheme');
                break;
            case "salmon" :
                document.body.classList.add('salmonTheme');
                break;
            case "yellow" :
                document.body.classList.add('yellowTheme');
                break;
            default:
                null;
        }
    })
})

