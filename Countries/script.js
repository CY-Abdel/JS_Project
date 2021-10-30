const searchInput = document.getElementById('search');
const results = document.getElementById('results');


// ON VEREFIE QU'ON PEUT JOINDRE L'API ET EXTRAIRE LES DONNEES AVANT DE COMMENCER

let countries;
let searchTerm = '';

// API REQUEST
const fetchCountries = async () => {
    // Une fonction async peut contenir une expression await qui interrompt l'exécution de la fonction asynchrone et attend la résolution de la promesse passée 5Promise DAND NOTRE CAS C FETCH°. 
    // La fonction asynchrone reprend ensuite puis renvoie la valeur de résolution.
    countries = await fetch(
        'https://restcountries.com/v2/all?fields=name,population,flag,capital').then(res => res.json());
     
    // un tab de 256 de pays est retourné donc tt marche bien
    console.log(countries);
}
// fetchCountries();


const showCountries = async () => {
    await fetchCountries();

    results.innerHTML = (
        countries
            // COUNTRY REPRESENTE CHAQUE ELEMENT DU TAB COUNTRIES
            // DONC COUNTRY C LES DONNEES DE CHAQUE PAYS PARMI LA LISTE DES 256 PAYS
            // ON MET TOUT AU MINISCULE POUR NE PAS AVOIR DE PROBLEME DANS LA RECHERCHE
            // INCLURE LA VALEUR DE L'INPUTE "searchTerm"

            .filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))

            // on relie avec .MAP tout les pays de .filtre selon : population,drapeau nom et capital.
            .map(country => (
                // LES ` ` C POUR ECRIRE DU HTML DANS JS
                `
                    <li class="country-item">
                        <img class="country-flag" src="${country.flag}" />
                        <h3 class="country-name">${country.name}</h3>
                        <h4 class="country-capital">(${country.capital})</h4>
                        <div class="country-info">
                            <h3 class="country-population">${numberWithSpace(country.population)}</h3>
                            <h5 class="country-population-text">Habitatns</h5>
                        </div>
                    </li>
                `
            )).join('') //SI ON MET PAS JOIN('') ON AURA UN PAYS VIRGULE UN PAYS VIRGULE ET AINSI DE SUITE
    );
};

showCountries();

// MISE EN PLACE DE LA BARRE DE RECHERCHE
searchInput.addEventListener('input', (e) => {
    // ON RECUPERE LA VALEUR DE L'INPUT CHAQUE FOIS ON CHANGE DE LETTRE
    searchTerm = e.target.value;
    console.log(e.target.value); 

    // A CHAQUE FOIS ON TAPE UNE LETTRE
    // ON RELANCE LA FUCNTION showCountries()
    showCountries();
})

// FAIRE DES ESPACES CHAQUE TROIS CHIFFRES SUR LA POPULATIONS
function numberWithSpace(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}