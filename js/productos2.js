document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Producto agregado al carrito.');
    });
});
function confirmarRedireccion() {
    const confirmar = confirm("¿Desea ver su carrito de pedidos?");
    if (confirmar) {
        window.location.href = "carrito.html"; 
    }
}
