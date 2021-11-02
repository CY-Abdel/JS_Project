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

// ********** PARTIE POP-UP *****************

const imgContact = document.getElementById('img-contact');
const popup = document.getElementById('pop-up');
let playOnce = true;

window.addEventListener('scroll', function() {

    console.log(window.innerHeight);
    console.log(window.scrollY);
    console.log(document.body.offsetHeight);

    scrollValue = (window.scrollY + window.innerHeight) / (document.body.offsetHeight / 100);
    console.log(scrollValue);

    // apparaitre image street workout a 45%
    if (scrollValue > 60) {
        imgContact.style.opacity = '1';
        imgContact.style.transform = 'none';
    } else if (scrollValue < 55) {
        imgContact.style.opacity = '0';
        imgContact.style.transform = 'translateX(-200px)';
        imgContact.style.transition = '1s ease-in';
    };

    // pop-pu newsletter
    function playPopUpOnce() {
        if (scrollValue > 72 && playOnce) {
            this.setTimeout(() => {
                popup.style.opacity = 1;
                popup.style.transform = 'none';
            }, 1500);
            playOnce = false;
        }
    };
    playPopUpOnce();
})

document.getElementById('close').addEventListener('click', () => {
    popup.style.opacity = '0';
    popup.style.transform = 'translateX(500px)';
} )