
// Dark mode : Créer le code pour ajouter un dark mode au site SkillFacile

let darkMode = document.getElementById("darkmode");
let body = document.querySelector("body");
let logo = document.getElementById("logo");

// activer le dark mode au click du bouton darkMode
darkMode.addEventListener("click", function (e) {
    body.classList.toggle("darkmondeon");
    logo.classList.toggle("darkmondeon");
    if (body.classList.contains("darkmondeon")) {
        darkMode.innerHTML = "Light Mode";
        // remplacer logo white par logo black
        logo.src = "img/logo-blanc.png";
        e.preventDefault();
    } else {
        darkMode.innerHTML = "Dark Mode";
        // remplacer logo black par logo white
        logo.src = "img/logo-noir.png";
        e.preventDefault();
    }
});

// Menu responsive : vous devez créer un menu responsive qui s'ouvre et se ferme, tel que représenté sur la vidéo de présentation. Petit bonus : faire la fermeture au scroll et la fermeture lorsqu'une modale s'ouvre

// fonction pour ouvrir le menu responsive

function openMenu() {

    document.querySelector("nav").classList.toggle("active");
    let burger = document.getElementById("toggle-button");
    burger.classList.toggle("fa-times");
    burger.classList.toggle("fa-bars");
}

// ouverture au click du menu responsive

document.getElementById("toggle-button").addEventListener("click", openMenu);

// fermer le menu responsive au scroll

window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    let burger = document.getElementById("toggle-button");
    nav.classList.remove("active");
    burger.classList.remove("fa-times");
    burger.classList.add("fa-bars");
});


// fermer le menu responsive au click en dehors du menu responsive
window.addEventListener("click", function (e) {
    let nav = document.querySelector("nav");
    let burger = document.getElementById("toggle-button");
    if (e.target != nav && e.target != burger) {
        nav.classList.remove("active");
        burger.classList.remove("fa-times");
        burger.classList.add("fa-bars");
    }
    e.preventDefault();
});

// fermer le menu responsive au click sur un lien du menu responsive
let links = document.querySelectorAll("nav ul li a");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let nav = document.querySelector("nav");
        let burger = document.getElementById("toggle-button");
        nav.classList.remove("active");
        burger.classList.remove("fa-times");
        burger.classList.add("fa-bars");
    });
}

// modale inscription newsletter : Pour la modale de newsletter, vous devez utiliser les creatElement pour créer tous les éléments qui la compose. Bonus : Mettre en place un message lorsque l'utilisateur s'inscrit.

// Fonction pour ouvrir la fenêtre modale newsletter
function openNewsletter() {
    // Création de la fenêtre modale
    let newsletter = document.createElement("div");
    newsletter.setAttribute("id", "newsletter-modal");

    // Création du formulaire de la fenêtre modale
    let form = document.createElement("form");
    form.setAttribute("class", "form-container");

    // Création de l'élément d'entrée email
    let input = document.createElement("input");
    input.setAttribute("type", "email");
    input.setAttribute("placeholder", "Entrez votre email");
    input.setAttribute("name", "email");
    input.setAttribute("required", "");

    // Création du bouton d'inscription à la newsletter
    let button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.innerHTML = "Recevoir la newsletter";

    // Création du bouton de fermeture de la fenêtre modale
    let close = document.createElement("i");
    close.setAttribute("class", "fas fa-times");

    // Placement du bouton de fermeture en haut à droite de la fenêtre modale
    close.style.position = "absolute";
    close.style.top = "0";
    close.style.right = "0";
    close.style.margin = "10px";

    // Ajout du formulaire à la fenêtre modale
    form.appendChild(input);
    form.appendChild(button);
    form.appendChild(close);

    // Ajout du formulaire à la fenêtre modale
    newsletter.appendChild(form);

    // Ajout de la fenêtre modale au corps du document
    document.body.appendChild(newsletter);

    // Au clic sur le bouton de fermeture de la fenêtre modale
    close.addEventListener("click", function (e) {
        newsletter.remove();
        e.preventDefault();
    });

    // Au clic en dehors de la fenêtre modale, fermer la fenêtre modale
    // window.addEventListener("click", function (e) {
    //     if (e.target != newsletter && e.target != form) {
    //         newsletter.remove();
    //     }
    //     e.preventDefault();
    // });

    // Au clic sur le bouton d'inscription à la newsletter, afficher un message de confirmation
    button.addEventListener("click", function (e) {
        form.innerHTML = `
        <i class="fas fa-times"></i>
        <h3 class="subtitle">Félicitations pour votre inscription à la newsletter</h3>`;

        e.preventDefault();
    });
}

// Au clic sur le bouton newsletter, appeler la fonction openNewsletter
document.getElementById("newsletter").addEventListener("click", function (e) {
    openNewsletter();
    e.preventDefault();
});

// Modale contact : Créer la modale de contact en utilisant la balise dialogue. Pour cette partie là, vous ne devez pas utiliser de createElement. Bonus : Mettre en place un message lorsque l'utilisateur

let formRecup = document.querySelector('#contact div');
let formButton = document.getElementById('contact-button');

// remove post method
let formMethod = document.querySelector('#contact div form');
formMethod.removeAttribute("method", "post");


// Display form dialog
formButton.addEventListener('click', () => {
    let form = document.createElement("dialog");
    let closeButton = document.createElement("button");
    closeButton.innerHTML = `<i class="fas fa-times"></i>`;
    document.body.appendChild(form);
    form.appendChild(formRecup);
    form.appendChild(closeButton);

    form.showModal();
    formRecup.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();
        contact.innerHTML = `
        <h3 class="subtitle">Votre demande a bien été envoyée</h3>
        `;
    });
    // Close button
    closeButton.addEventListener('click', () => {
        form.close();
    })

})


// Bonus supplémentaire : Fermer le menu responsive a l'ouverture de la modale