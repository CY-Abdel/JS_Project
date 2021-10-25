let mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', cursor);

function cursor(e) {
   mouseCursor.style.top = e.pageY + 'px';
   mouseCursor.style.left = e.pageX + 'px';
}

// CURSOR QUI GROSSI SUR LA NAV BAR
let navLinks = document.querySelectorAll(".nav-links li");

// ICI LINK ON PEUT LE NOMER VELO OU AUTRE IL REPRESENTE LES 'li'
navLinks.forEach(link => {

   // LORSQ ON SURVOLE LES 'li' ON AJOUTE LA CLASS 'link-grow' A 'mouseCurosr'
   link.addEventListener('mouseover', () => {
      mouseCursor.classList.add('link-grow');
      link.classList.add("hovered-link");
   })

   //le soucis est que LA SOURIS RESTE GRANDE APRES AVOIR QUIITER LA NAV BAR ET LES 'li' RESTE EN COLOR WHITE
   // DANS CE CAS LA ON RETIRE LES CLASSE 'link-grow & hovered-link'
   link.addEventListener('mouseleave', () => {
      mouseCursor.classList.remove('link-grow');
      link.classList.remove("hovered-link");
   })
})

// Hover IMG ADD backdrop-filter
let imgHover = document.querySelector('.img');

imgHover.addEventListener('mouseover', () => {
   mouseCursor.classList.add('brightness');
})
// ON RETIRE LA CLASSE BRIGHTNESS QUAND ON QUITTE L'IMAGE POUR QU'ELLE NE SOIT PAS APPLIQUER AU TEXTE EGALEMENT
imgHover.addEventListener('mouseleave', () => {
   mouseCursor.classList.remove('brightness');
})