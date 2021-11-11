const searchInput = document.getElementById('searchInput');
const randomMeal = document.getElementById('randomMeal');
const results = document.getElementById('results');

// la valeur a chercher dans le lien
let search = "";

// Api : ThMmealDB
  // search meal by name : 
    //  www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

  const fetchSearch = async(url) => {
    meals = await fetch(
      // `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      // on le rend dynamique
      `https://www.themealdb.com/api/json/v1/1/${url}`)
      .then(res => res.json())
      .then(res => res.meals)
      console.log(meals);
  }

  const searchDisplay = async () => {
    // await fetchSearch();

    // sans url comme param
    // await fetchSearch();

    // dans le cas de $(url) comme param
    await fetchSearch(search);

    // dans le cas ou le resultat est null ou introuvable
    if(meals == null) {
      results.innerHTML = '<span class="noResult">No results</span>';    
    }

    // map les resultats
    results.innerHTML = (
      meals.map(meal => (
        `
          <div class="searchContainer">
            <h2>${meal.strMeal}</h2>
            <div class="infos">
              <div>origin : ${meal.strArea}</div>
              <div>category : ${meal.strCategory}</div>
            </div>
            <img src='${meal.strMealThumb}' /></br>
            <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
          </div>
        `
      )).join('')
    );
  };

  searchInput.addEventListener('input', (e)=> {
    // search = e.target.value; //sans url en param
      // dans le cas avec url comme param
    search = `search.php?s=${e.target.value}`;
    // a chaque input on doit relancer la recherche
    searchDisplay();
  });


  // Lookup a single random meal: =>
    //  www.themealdb.com/api/json/v1/1/random.php

  const randomMealDisplay = async() => {
    await fetchSearch('random.php');

    results.innerHTML = (
      meals.map(meal => (
        `
          <div class="randomContainer">
            <h2>${meal.strMeal}</h2>
            <div class="infos">
              <div>origin : ${meal.strArea}</div>
              <div>category : ${meal.strCategory}</div>
            </div>
            <img src='${meal.strMealThumb}' />
            <p>${meal.strInstructions}</p>
            <a href="${meal.strYoutube}" target="_blank"><i class="fab fa-youtube"></i></a>
          </div>
        `
      ))
    );
  };

  randomMeal.addEventListener('click', randomMealDisplay);
  randomMealDisplay();

