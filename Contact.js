document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector("textarea");

    // Maak melding element
    const feedback = document.createElement("p");
    feedback.style.marginTop = "10px";
    form.appendChild(feedback);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Reset feedback
        feedback.textContent = "";
        feedback.style.color = "red";

        // Validatie
        if (nameInput.value.trim() === "") {
            feedback.textContent = "Vul je naam in.";
            return;
        }

        if (!validateEmail(emailInput.value)) {
            feedback.textContent = "Vul een geldig e-mailadres in.";
            return;
        }

        if (messageInput.value.trim().length < 10) {
            feedback.textContent = "Je bericht moet minimaal 10 tekens bevatten.";
            return;
        }

        // Succes
        feedback.style.color = "green";
        feedback.textContent = "Bericht succesvol verzonden! Wij nemen snel contact met je op.";

        form.reset();
    });

    function validateEmail(email) {
        const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        return regex.test(email);
    }
});