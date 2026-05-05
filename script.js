document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contact-form');
    const inputs = {
        name: { el: document.getElementById('name'), error: document.getElementById('name-error') },
        email: { el: document.getElementById('email'), error: document.getElementById('email-error') },
        subject: { el: document.getElementById('subject'), error: document.getElementById('subject-error') },
        message: { el: document.getElementById('message'), error: document.getElementById('message-error') }
    };
    const successMsg = document.getElementById('form-success');

    const dsToggle = document.getElementById('ds-toggle');
    const dsOverlay = document.getElementById('ds-overlay');
    const dsClose = document.getElementById('ds-close');

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const showError = (field, message) => {
        field.el.classList.add('invalid');
        field.error.textContent = message;
    };

    const clearError = (field) => {
        field.el.classList.remove('invalid');
        field.error.textContent = '';
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        if (inputs.name.el.value.trim().length < 3) {
            showError(inputs.name, 'Ingresa al menos 3 caracteres.');
            isValid = false;
        } else clearError(inputs.name);

        if (!isValidEmail(inputs.email.el.value.trim())) {
            showError(inputs.email, 'Email no válido.');
            isValid = false;
        } else clearError(inputs.email);

        if (inputs.subject.el.value === '') {
            showError(inputs.subject, 'Selecciona una opción.');
            isValid = false;
        } else clearError(inputs.subject);

        if (inputs.message.el.value.trim().length < 10) {
            showError(inputs.message, 'Mínimo 10 caracteres.');
            isValid = false;
        } else clearError(inputs.message);

        if (isValid) {
            successMsg.classList.remove('hidden');
            form.reset();
            setTimeout(() => successMsg.classList.add('hidden'), 3000);
        }
    });

    Object.values(inputs).forEach(field => {
        field.el.addEventListener('input', () => clearError(field));
    });

    dsToggle.addEventListener('click', () => dsOverlay.classList.remove('hidden'));
    dsClose.addEventListener('click', () => dsOverlay.classList.add('hidden'));
    
    dsOverlay.addEventListener('click', (e) => {
        if (e.target === dsOverlay) dsOverlay.classList.add('hidden');
    });
});
