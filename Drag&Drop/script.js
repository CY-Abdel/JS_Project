let item;

// ON CATCH UN ELEMENT ON LE STOCK DANS ITEM
document.addEventListener('dragstart', (e) => {
    // console.log(e.target);
    item = e.target;
});

//  ON NE PEUT PAS DROPPER QUAND ON DRAG "icone interdit"
// ON ENLEVE L'INTERDICTION
document.addEventListener('dragover', (e) => {
    // icont interdit devient comme le rectagle de copier 
    e.preventDefault();
});

// Drop
document.addEventListener('drop', (e) => {
    // e.preventDefault(e);

    // e.target c'est l'ELEMENT OU l'on DROP (body ou ul ou div ....)
    // console.log(e.target);

    // le soucis on peut le coller partout et on veut le coller seulment sur le ul
    // e.target.appendChild(item);


    // ******** on drag et drop seumlment dans les ul
    if (e.target.getAttribute("data-draggable") == "target") {
        e.preventDefault(e);   
        e.target.appendChild(item);
    }
});

// pour eviter bug et soucis
// vider le item et le remmetre sur null
document.addEventListener('dragend', () => (item = null));