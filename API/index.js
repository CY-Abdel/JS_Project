// ************** API ***************

const quote = document.getElementById('quote');
const author = document.getElementById('author');

const getQuote = () => {
    // chercher une image au hasard au nackround
    fetch ('https://picsum.photos/1600/1000')
    // .then((res) => console.log(res))
    .then((res) => {
        document.getElementById('pic').innerHTML =
            `<img src=${res.url} />`;   
    });

    // chercher une citation au hasard
    fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then(data => {
            // console.log(data.content);
            quote.innerHTML = data.content;
            author.innerHTML = "~ " + data.author + ". ~";
        });
    

};

quote.addEventListener('click', () => getQuote());
getQuote();



