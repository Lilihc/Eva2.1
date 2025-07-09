let carrito = [];
function mostrarCarrito() {
    contador.innerText = carrito.length;

    if (carrito.length === 0) {
        lista.innerHTML = 'Carrito vacío';
        return;
    }

    let html = '<strong>Productos:</strong><ul>';
    carrito.forEach((producto, index) => {
        html += `<li>${producto.nombre} 
                    <button onclick="eliminarDelCarrito(${index})">❌</button>
                 </li>`;
    });
    html += '</ul>';
    lista.innerHTML = html;
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1); // Elimina el producto en la posición "index"
    mostrarCarrito();         // Actualiza la vista
    mostrarNotificacion('❌ Producto eliminado del carrito');
}

function agregarAlCarrito(nombre) {
    const producto = { nombre: nombre };
    carrito.push(producto);
    mostrarCarrito();
    mostrarNotificacion(`✅ ${nombre} agregado al carrito`);
}

function verProducto(nombre) {
    const producto = productos.find(p => p.nombre === nombre);
    if (producto) {
        document.getElementById('vitrina').innerHTML = `<img src="${producto.img}" alt="${nombre}">`;
    }
}
function verPolera() {
    const imgUrl = 'https://cdn.pixabay.com/photo/2021/09/13/05/34/kid-6620283_640.jpg';
    document.getElementById('vitrina').innerHTML = `<img src="${imgUrl}" alt="Polera" width="300">
        <br>
        <button onclick="agregarAlCarrito('Polera')">Agregar al carrito 🛒</button>
    `;
}
function verVestido() {
    const imgUrl = 'https://cdn.pixabay.com/photo/2022/06/07/15/56/child-7248693_640.jpg';
    document.getElementById('vitrina').innerHTML = `<img src="${imgUrl}" alt="Vestido" width="300">
        <br>
        <button onclick="agregarAlCarrito('Vestido')">Agregar al carrito 🛒</button>`;
}
function verBufanda() {
    const imgUrl = 'https://cdn.pixabay.com/photo/2015/12/21/05/45/girl-1102086_640.jpg';
    document.getElementById('vitrina').innerHTML = `<img src="${imgUrl}" alt="Bufanda" width="300">
        <br>
        <button onclick="agregarAlCarrito('Bufanda')">Agregar al carrito 🛒</button>`;
}

function verFalda() {
    document.getElementById('vitrina').innerHTML = '<img id="falda" src="image/falda.jpg" >';
}

function verAbrigo() {
    const imgUrl = 'https://cdn.pixabay.com/photo/2023/10/16/03/44/daughter-8318355_640.jpg';
    document.getElementById('vitrina').innerHTML = `<img src="${imgUrl}" alt="Abrigo" width="300">
        <br>
        <button onclick="agregarAlCarrito('Abrigo')">Agregar al carrito 🛒</button>`;
}
//SUMA
function sumar() {
    const resultado = 8 + 6;
    document.getElementById('vitrina').innerHTML = `<h1>${resultado}</h1>`;
}



// VALIDACIÓN DE FORMULARIO
document.getElementById("formulario-contacto").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const erroresDiv = document.getElementById("errores");

    erroresDiv.innerHTML = ""; 

    if (nombre === "" || telefono === "" || correo === "" || mensaje === "") {
        errores.innerHTML = "Por favor, complete todos los campos.";
        return;
    }

    if (!/^\d{8,15}$/.test(telefono)) {
        errores.innerHTML = "El número de teléfono debe contener solo dígitos (mínimo 8).";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        errores.innerHTML = "Ingrese un correo electrónico válido.";
        return;
    }

    alert("Formulario enviado correctamente.");
    this.reset();
});


const contador = document.getElementById('contador-carrito');
const lista = document.getElementById('carrito-lista');
const icono = document.getElementById('icono-carrito');

icono.addEventListener('click', () => {
    lista.classList.toggle('oculto');
});
function mostrarNotificacion(mensaje) {
    const noti = document.getElementById('notificacion');
    noti.innerText = mensaje;
    noti.classList.remove('oculto');

    setTimeout(() => {
        noti.classList.add('oculto');
    }, 2500); // Se oculta en 2.5 segundos
}
