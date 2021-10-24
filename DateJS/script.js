const start = document.getElementById('start_date');
const end = document.getElementById("end_date");
const today = new Date().toISOString().split('T')[0];

console.log(new Date());// Date Sun Oct 24 2021 15:22:51 GMT+0200 (Central European Summer Time)
console.log(new Date().toISOString());// 2021-10-24T13:21:39.103Z
console.log(new Date().toISOString().split('T'));// Array [ "2021-10-24", "13:24:02.936Z" ]
console.log(today); // 2021-10-24


// ON AFFECTE LA DATE D'AUJOURDUI A LA DATE DE DEPART
start.value = today;
start.min = today;

// ON DIT PAR EXEMPLE LA DATE D'ARRIVEE SERA AU MIN UN JOUR APRES LA DATE DE DEPART
const tomorrowDate = () => {
    let day = new Date(today);
    // ON AFFECTE AU JOUR DE LA DATE (SET) + 1
    day.setDate(day.getDate() + 1);
    console.log("day.getDate = " + day.getDate());
    let tomorrow = day.toISOString().split('T')[0];
    // LA VALEUR DE LA DATE D'ARRIVEE SERA UN JOUR APRES LA DATE DE PART ET SERA EGALAEMENT LA DATE MINIMALE
    end.value = tomorrow;
    end.min = tomorrow;
}

tomorrowDate();

// CHAQUE FOIS QUE L'ON CHANGE LA DATE DE DEPART ALORS LA DATE D'ARRIVEE VA EGALEMENT CHANGER EN AJOUTANT UN addEventListener
start.addEventListener('change', (e) => {
    let day = new Date(e.target.value); // 2021-10-27
    console.log("e.target.value = " + e.target.value); // e.target.value = 2021-10-27

    day.setDate(day.getDate() + 1);
    let tomorrow = day.toISOString().split('T')[0];
    end.value = tomorrow;
    end.min = tomorrow;
})


// CALCUL DU COUT DE LA RESERVATION
const bookingTotal = () => {
    let date1 = new Date (start.value);
    let date2 = new Date (end.value);
    console.log("start = " + start.value);
    console.log("end = " + end.value);
    
    // ON CALCULE LE NBR DE JOUR ENTRE LE START ET LE END DATE
    let diffTime = Math.abs(date2 - date1); // 86400000
    console.log("diffTime = " + diffTime); //diffTime = 86400000

    // ON VA CONVERTIR diffTime DE SECONDE EN JOURS
        //Math.ceil arrondit un nombre VERS LE HAUT au nombre entier le plus proche
    let diffDays = Math.ceil(diffTime / (1000*60*60*24));
    console.log("diffDays = " + diffDays);

    // ON CALCULE LE PRIX DU SEJOUR ET ON L'AFFICHE
    let nightPrice = document.getElementById('nightPrice').innerHTML;
    console.log("nightPrice = " + nightPrice);

    let total = diffDays * nightPrice;
    document.getElementById('total').innerHTML = total;
}

// ON RELANCE LE CALCULE (diffDays) DU PRIX DE VOYAGE CHAQUE FOIS QUE L'ON CHANGE LES DATES DE DEPART ET END
start.addEventListener('change', () => bookingTotal());
end.addEventListener('change', () => bookingTotal());

bookingTotal();