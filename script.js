document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        
        if (name.length < 3) {
            alert('Por favor, ingresa un nombre válido (mínimo 3 caracteres).');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
        }
        
        if (subject === '') {
            alert('Por favor, selecciona un motivo de contacto.');
            return;
        }
        
        if (message.length < 10) {
            alert('Tu mensaje debe tener al menos 10 caracteres.');
            return;
        }

        alert('¡Gracias, ' + name + '! Tu mensaje ha sido enviado correctamente.');
        form.reset();
    });
});
