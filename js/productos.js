
function confirmarRedireccion() {
    const confirmar = confirm("¿Desea ver su carrito de pedidos?");
    if (confirmar) {
        window.location.href = "carrito.html"; 
    }
}

