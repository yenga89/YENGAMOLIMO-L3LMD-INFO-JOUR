document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simuler l'envoi du formulaire
    document.getElementById('form-response').innerText = Merci ${name}, votre message a été envoyé !;
});
