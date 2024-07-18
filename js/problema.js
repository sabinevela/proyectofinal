function validarFormulario() {
    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let problema = document.getElementById('problema').value; 

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false; 
    }
    if (problema.length < 10) {
        alert('La descripción del problema debe tener al menos 10 caracteres.');
        return false;
    }
    return true;
}
