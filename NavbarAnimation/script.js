navbar = document.getElementById('navbar');
navElements = document.getElementById('nav-elements');

window.addEventListener('scroll', function () {
    const scroll = this.document.documentElement.scrollTop;

    // console.log(scroll); 

    // ON REDUIT LA HEIGHT DE LA NAVBAR UNE FOIS QU'ON A SCROLLER PLUS DE 200 ET ON MET DE L'OPACITY
    if (scroll > 200) {
        navbar.style.height = '7vh';
        navElements.style.height = '7vh';
        navbar.style.background = "rgba(0, 250, 154, 0.89";
    } else
    // ON REMET LA NAV A SA TAILLE D'ORIGINE ET ON ENLEVE L"OPACITY
    {
        navbar.style.height = '10vh';
        navElements.style.height = '10vh';
        navbar.style.background = "#00FA9A";
    }
})