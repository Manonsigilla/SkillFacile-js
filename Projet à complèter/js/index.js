
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
    newsletter.setAttribute("class", "form-container");

    // Création du formulaire de la fenêtre modale
    let form = document.createElement("form");

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
    newsletter.appendChild(close);

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

let formButton = document.getElementById('contact-button');

formButton.addEventListener("click", function (e) {
    const dialog = document.querySelector('dialog');
    if (dialog !== null) {
        closeContact(dialog);
        dialog.remove();
        return;
    }
        openContact();
        e.preventDefault();
});

function closeContact(dialog) {
    dialog.remove();
}

function openContact() {
    const formulaire = `
    <dialog open>
    <i class="fa-solid fa-x closeContact"></i>
    <h1 class="subtitle">Contactez-nous</h1>
    <form action="#" method="">
        <input id="name" type="text" placeholder="Votre nom et prénom">
        <input id="phone" type="tel" placeholder="Votre numéro de téléphone">
        <input id="company" type="text" placeholder="Le nom de votre entreprise">
        <input id="mail" type="email" placeholder="Votre adresse mail">
        <select>
            <option value="Je veux des renseignements concernant l'accompagnement perso">Je veux des renseignements concernant l'accompagnement perso</option>
            <option value="Je veux des renseignements concernant l'accompagnement small group">Je veux des renseignements concernant l'accompagnement small group</option>
            <option value="Je veux des renseignements concernant la formation digitale">Je veux des renseignements concernant la formation digitale</option>
            <option value="Je veux des renseignements concernant le coaching digital">Je veux des renseignements concernant le coaching digital</option>
            <option value="J'ai une autre demande">J'ai une autre demande</option>
        </select>
        <textarea cols="30" rows="10" placeholder="Précisez votre demande afin de faciliter l'échange lorsqu'un de nos conseillers vous appellera"></textarea>
        <label for="RGPD"><input id="RGPD" type="checkbox" required="required">  En soumettant ce formulaire, j'accepte que les informations saisies soient transmises par mail à l'équipe de SkillFacile dans le but d'être recontacté concernant la demande effectuée. Je comprends que j'ai un droit de modification, d'accès et de suppression de mes informations personnelles.</label>
        <input id="submit" type="submit" value="Envoyer la demande">                    
    </form>
</dialog>
    `;
    const emplacement = document.querySelector('#admin');
    emplacement.insertAdjacentHTML('beforebegin', formulaire);

    // Au clic sur le bouton de fermeture de la fenêtre modale
    const close = document.querySelector(".closeContact");
    const dialog = document.querySelector('dialog');

    close.addEventListener("click", function (e) {
        dialog.remove();
        e.preventDefault();
    });

    // message de confirmation

    const submit = document.querySelector("#submit");

    submit.addEventListener("click", function (e) {
        const form = document.querySelector("form");
        const RGPD = document.querySelector("#RGPD");

        if (RGPD.checked) {
            const message = document.createElement("p");
            message.innerHTML = "Votre demande a bien été envoyée";
            form.style.display = "none";
            const titre = document.querySelector('h1');
            titre.insertAdjacentElement("beforeend", message);
            RGPD.checked = false;
        }
        e.preventDefault();
    });
}


    


// Bonus supplémentaire : Fermer le menu responsive a l'ouverture de la modale