import  {llenarTienda} from './llenadoTienda.js'

import {ampliarinformacionProducto} from './ampliarInfo.js'


// creo un producto vacio
let producto={}


//Llamando a tienda llenado 
llenarTienda()


//Rutina para ampliar informacion
let contenedorTienda=document.getElementById("fila")

contenedorTienda.addEventListener("click",function(evento) {

    if(evento.target.classList.contains("btn")){ 
    let modalinfo = new bootstrap.Modal(document.getElementById('modalinformacion'))
    producto=ampliarinformacionProducto(evento)

    modalinfo.show()
    
    console.log(producto)
    }
})

//Rutina añadir un producto al carrito de compras

let carrito=[]

let botonAgregarCarrito=document.getElementById("botonadd")

botonAgregarCarrito.addEventListener("click",function() {

    carrito.push(producto)
    console.log(carrito)
    
})


