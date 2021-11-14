const list = document.getElementById('list');
const form = document.querySelector('form');
const item = document.getElementById('item');

// ajouter une tache a la liste
form.addEventListener('submit', (e) => {
    e.preventDefault();
    list.innerHTML += `<li>${item.value}</li>`;
    // on injecte l'element a ntre local storage
    storage();
    // on remet le place holder ' a faire"
    item.value = '';
});

// supprimer un element
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('checked')) {
        e.target.remove();
    } else {
        e.target.classList.add('checked');
    }
    // si on supprime un element on appel la func storage pour le retirer egalement
    storage();
})

// stockage(storage) des taches
function storage() {
    // avoir un local storage du nom todo list mais on doit l'injecter,,,
    window.localStorage.todoList = list.innerHTML;
    
    // injecter la liste on appelant la function
}


// afficher les taches enregistrer dans le local storage
function getValue() {
    let storageContent = window.localStorage.todoList;
    if (!storageContent) {
        list.innerHTML = 
            '<li>Cliquer sur un todo pour le supprimer</li>'
    } else {
        list.innerHTML = storageContent;
    }
}
getValue();