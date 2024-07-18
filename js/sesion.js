function validarFormulario() {
    let email = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;

    
    if (email.trim() === '' || password.trim() === '') {
        mostrarError('Por favor, complete todos los campos.');
        return false; 
    }

  
    document.getElementById('loadingSpinner').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';

    
    setTimeout(function() {
        
        alert('Inicio de sesión exitoso!');
        
        window.location.href = 'dashboard.html';
    }, 2000);

    return false;
}

function mostrarError(mensaje) {
    var errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = mensaje;
    errorDiv.style.display = 'block';
}
