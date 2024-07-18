document.addEventListener("DOMContentLoaded", () => {
    displayCartItems();
});

function agregarProducto(id, nombre, precio) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(item => item.id === id);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].cantidad += 1;
    } else {
        cart.push({ id, nombre, precio, cantidad: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
}

function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    cart.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>$${item.precio.toFixed(2)}</td>
            <td>$${(item.cantidad * item.precio).toFixed(2)}</td>
            <td><button class="btn btn-danger" onclick="eliminarProducto('${item.id}')">Eliminar</button></td>
        `;

        tbody.appendChild(row);
    });

    const total = cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
    document.getElementById("total").innerText = `$${total.toFixed(2)}`;
}

function eliminarProducto(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
}

function vaciarCarrito() {
    localStorage.removeItem("cart");
    displayCartItems();
}


