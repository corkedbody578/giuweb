// Variables globales
let cart = [];
let cartModal = document.getElementById("cartModal");
let cartItemsContainer = document.getElementById("cartItems");
let cartTotal = document.getElementById("cartTotal");

// Función para agregar productos al carrito
function addToCart(productName, price) {
    // Verificar si el producto ya está en el carrito
    let existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    updateCart();
}

// Actualizar el carrito
function updateCart() {
    // Limpiar el contenedor
    cartItemsContainer.innerHTML = "";

    // Calcular el total
    let total = 0;

    // Generar contenido del carrito
    cart.forEach(item => {
        total += item.price * item.quantity;

        let itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `
            <p>${item.name} - $${(item.price / 100).toFixed(2)} x ${item.quantity}</p>
            <button onclick="removeFromCart('${item.name}')">Eliminar</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });

    // Mostrar el total
    cartTotal.innerText = `$${(total / 100).toFixed(2)}`;

    // Mostrar el modal si hay productos
    if (cart.length > 0) {
        cartModal.style.display = "flex";
    } else {
        cartModal.style.display = "none";
    }
}

// Eliminar producto del carrito
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCart();
}

// Función para cerrar el modal
document.querySelector(".close").onclick = function() {
    cartModal.style.display = "none";
};

// Función de pagar (simulada)
function checkout() {
    alert("¡Gracias por tu compra!");
    cart = [];
    updateCart();
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
};
