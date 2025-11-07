// Función para generar un código CAPTCHA aleatorio
function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captcha;
}

// Generar y mostrar CAPTCHA al cargar la página
window.onload = function() {
    document.getElementById('captchaCode').textContent = generateCaptcha();
}

// Validar el CAPTCHA cuando se envía el formulario
document.getElementById('captchaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userInput = document.getElementById('userInput').value.trim();
    const captchaCode = document.getElementById('captchaCode').textContent.trim();
    
    if (userInput === captchaCode) {
        alert('CAPTCHA CORRECTO! Formulario enviado');
        // Generar nuevo CAPTCHA después de un envío exitoso
        document.getElementById('captchaCode').textContent = generateCaptcha();
        document.getElementById('userInput').value = ''; // Limpiar el input
    } else {
        alert('CAPTCHA INCORRECTO! Formulario no enviado');
        document.getElementById('userInput').value = ''; // Limpiar el input en caso de error
    }
});