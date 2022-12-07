
let products = [
    {
        id: 1,
        name: "Pizza Magic",
        category: "Pizzas",
        precio:2500,
        cantidad:1,
        img: "../img/Tienda/america_digital_pizza_vegetariana_faciles_2021-2-1026x570.jpg"
    },
    {
        id: 2,
        name: "Pizza con Tomate",
        category: "Pizzas",
        precio:1500,
        cantidad:1,
        img: "../img/Tienda/delicia.jpg"
    },
    {
        id: 3,
        name: "Pizza de rúcula y tomates",
        category: "Pizzas",
        precio:1200,
        cantidad:1,
        img: "../img/Tienda/pizza-napoletana-vegana-3.jpg"
    },
    {
        id: 4,
        name: "Pizza de tofu, aceitunas y tomates",
        category: "Pizzas",
        precio:3000,
        cantidad:1,
        img: "../img/Tienda/pizza-vegana-con-albahaca-tomates-cherry-y-morron-foto-principal.jpg"
    },
    {
        id: 5,
        name: "Pizza de palta y aceitunas",
        category: "Pizzas",
        precio:2500,
        cantidad:1,
        img: "../img/Tienda/Pizza-vegetariana-con-masa-de-maiz.png"
    },
    {
        id: 6,
        name: "Hamburguesa de lentejas",
        category: "Hamburguesas",
        precio:800,
        cantidad:1,
        img: "../img/Tienda/Hamburguesa 1.jpg"
    },
    {
        id: 7,
        name: "Hamburguesa extra de lentejas y lechuga",
        category: "Hamburguesas",
        precio:950,
        cantidad:1,
        img: "../img/Tienda/Hamburguesa 2.jpg"
    },
    {
        id: 8,
        name: "Hamburguesa de lechuga y papa",
        category: "Hamburguesas",
        precio:1200,
        cantidad:1,
        img: "../img/Tienda/descarga.jpg"
    },
    {
        id: 9,
        name: "Hamburguesa de esparrago y zapallo",
        category: "Hamburguesas",
        precio:1350,
        cantidad:1,
        img: "../img/Tienda/descarga (1).jpg"
    },
    {
        id: 10,
        name: "Hamburguesa de palta",
        category: "Hamburguesas",
        precio:2000,
        cantidad:1,
        img: "../img/Tienda/Hamburguesa5.jpg"
    },
    {
        id: 11,
        name: "Tomates",
        category: "Verduras",
        precio:350,
        cantidad:1,
        img: "../img/Tienda/Tomate.jpg"
    },
    {
        id: 12,
        name: "Papa",
        category: "Verduras",
        precio:250,
        cantidad:1,
        img: "../img/Tienda/papa.jpg"
    },
    {
        id: 13,
        name: "Ciruela",
        category: "Frutas",
        precio:700,
        cantidad:1,
        img: "../img/Tienda/Ciruela.jpg"
        
    },


]


const contenedorProductos = document.getElementById('contenedor-productos')

//TERCER PASO

const contenedorCarrito = document.getElementById('carrito-contenedor')
//SEXTO PASO
const botonVaciar = document.getElementById('vaciar-carrito')
//SEXTIMO PASO, MODIFICAR LOS CONTADORES
const contadorCarrito = document.getElementById('contadorCarrito')

//OCTAVO PASO
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []
console.log(carrito.length)
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
//SEXTO PASO
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

//PRIMER PRIMER PASO, INYECTAR EL HTML
products.forEach((producto) => {
    const div = document.createElement('div')
    div.innerHTML = ` 
    <div class="product-item" category="${producto.category}">
    <img src="${producto.img}"  alt= "" height="200" width="260" alt="" >
    <a href="#">${producto.name}</a>
    <div><span>Precio : $<label>${producto.precio}</label></span></div>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    </div>

            
            `
    contenedorProductos.appendChild(div)

    //2 - SEGUNDO PASO, LUEGO DE QUE INSERTEMOS EL HTML EN EL DOM:
    const boton = document.getElementById(`agregar${producto.id}`)
    //Por cada elemento de mi array, creo un div, lo cuelgo, le pongo un id particular, una vez colgado
    //le hago un get element by id (el de agregar) Obtengo el elemento y a dicho elemento le agregamos
    //el add event listener

    boton.addEventListener('click', () => {
        //esta funcion ejecuta el agregar el carrito con la id del producto
        agregarAlCarrito(producto.id)
        //
    })
})

// 1- PRIMER PASO

//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    //PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some(prod => prod.id === prodId) //comprobar si el elemento ya existe en el carro

    if (existe) { //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
        const prod = carrito.map(prod => { //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
            // map encuentre cual es el q igual al que está agregado, le suma la cantidad
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO ESTÉ, AGREGAMOS EL CURSO AL CARRITO
        const item = products.find((prod) => prod.id === prodId)//Trabajamos con las ID
        //Una vez obtenida la ID, lo que haremos es hacerle un push para agregarlo al carrito
        carrito.push(item)
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y se ve.
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
}
//agregarAlCarrito(1) //Le pasamos el ID por parametro. Tenemos que asigarle como evento esta funcion al boton
//con el id de su producto correspondiente

// 5 - QUINTO PASO
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busca el elemento q yo le pase y nos devuelve su indice.

    carrito.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos 
    // un elemento 
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
    console.log(carrito)
}

const actualizarCarrito = () => {
    //4- CUARTO PASO
    //LOS APPENDS SE VAN ACUMULANDO CON LO QE HABIA ANTES
    contenedorCarrito.innerHTML = "" //Cada vez que yo llame a actualizarCarrito, lo primero q hago
    //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
    //actualizado
    //3 - TERCER PASO. AGREGAR AL MODAL. Recorremos sobre el array de carrito.

    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal)
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        
        <p>${prod.name}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        </div>
        `
        
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    //SEPTIMO PASO
    contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.
    //OCTAVO PASO
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto q recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.

}

//
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) => {
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() //cuando clickeo sobre el modal se finaliza la propagacion del click a los elementos
    //padre
})


