document.getElementById("sign-up-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    const question = document.querySelector('input[name="question"]:checked');

    let valid = true;

    if (username.length < 6) {
        document.getElementById("username").classList.add("error");
        document.getElementById("username-error").textContent = "Le pseudo doit comporter au moins 6 caractères.";
        valid = false;
    } else {
        document.getElementById("username").classList.remove("error");
        document.getElementById("username").classList.add("valid");
        document.getElementById("username-error").textContent = "";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("email").classList.add("error");
        document.getElementById("email-error").textContent = "L'email est invalide.";
        valid = false;
    } else {
        document.getElementById("email").classList.remove("error");
        document.getElementById("email").classList.add("valid");
        document.getElementById("email-error").textContent = "";
    }

    if (password.length < 8) {
        document.getElementById("password").classList.add("error");
        document.getElementById("password-error").textContent = "Le mot de passe doit comporter au moins 8 caractères.";
        valid = false;
    } else {
        document.getElementById("password").classList.remove("error");
        document.getElementById("password").classList.add("valid");
        document.getElementById("password-error").textContent = "";
    }

    if (password !== passwordConfirm) {
        document.getElementById("password-confirm").classList.add("error");
        document.getElementById("password-confirm-error").textContent = "Les mots de passe ne correspondent pas.";
        valid = false;
    } else {
        document.getElementById("password-confirm").classList.remove("error");
        document.getElementById("password-confirm").classList.add("valid");
        document.getElementById("password-confirm-error").textContent = "";
    }

    if (!question) {
        document.getElementById("message").textContent = "Veuillez répondre à la question.";
        valid = false;
    } else {
        document.getElementById("message").textContent = "";
    }

    if (valid) {
        document.getElementById("message").textContent = "Formulaire soumis avec succès !";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").textContent = "Il y a des erreurs à corriger.";
        document.getElementById("message").style.color = "red";
    }
});
