// ************ Video Youtube ************

const input = document.getElementById('input');
const video = document.getElementById('video');
let link = "";

input.addEventListener('input', (e) => {
    console.log(e.target.value);

    // link = e.target.value;
    changeLink(e.target.value);

    if (link) {
        video.innerHTML = 
            '<iframe width="713" height="401" src="' + link + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
});

const changeLink = (linkToChange) => {
    let embed = linkToChange.replace("watch?v=", "embed/");
    link = embed;
    link = embed.split('&')[0];
}

// https://www.youtube.com/embed/QB1DTl7HFnc
// https://www.youtube.com/watch?v=QB1DTl7HFnc&ab_channel=FromScratch-D%C3%A9veloppementWeb
