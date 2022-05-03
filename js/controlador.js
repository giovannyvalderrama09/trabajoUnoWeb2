import  {llenarTienda} from './llenadoTienda.js'

import {ampliarinformacionProducto} from './ampliarInfo.js'


// creo un producto vacio
let producto={}


//Llamando a tienda llenado 
llenarTienda()

//Referencia modal
let modalinfo = new bootstrap.Modal(document.getElementById('modalinformacion'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumen'))

//Rutina para ampliar informacion
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(evento) {

    if(evento.target.classList.contains("btn")){ 
    producto=ampliarinformacionProducto(evento)

    modalinfo.show()
    
    console.log(producto)
    }
})

//Rutina añadir un producto al carrito de compras

let carrito=[]

let botonAgregarCarrito=document.getElementById("botonadd")

botonAgregarCarrito.addEventListener("click",function() {

   //Debo capturar la cantidad y agregarla al producto 
    let cantidad=document.getElementById("cantidadProducto").value
    producto.cantidad=cantidad

    //Subtotal
    producto.subtotalPro=cantidad*(Number(producto.precio.split("$")[1]))

 
     //Agrego el producto al carrito
    carrito.push(producto)

    modalinfo.hide()

     //pintar la capsula del carrito
     let suma=0
     carrito.forEach(function(producto) {
     suma=suma+Number(producto.cantidad) 

     })

     

    

     console.log(suma)
  let capsula=document.getElementById("capsula")
  capsula.classList.remove("invisible")
  capsula.textContent=suma 
    console.log(carrito) 
})

let limpiarCarrito=document.getElementById("limpiar")
limpiarCarrito.addEventListener("click",function(limpiar) {
    carrito=[]
    let capsula=document.getElementById("capsula")
    capsula.textContent = 0
    capsula.classList.add("invisible")
})

  


//rutina para el carrito 
let botonVercarrito=document.getElementById("vercarrito")
botonVercarrito.addEventListener("click",function() {


    //recorrer el carrito y pintar los productos

    let basecarrito=document.getElementById("base")

    basecarrito.innerHTML=""

    carrito.forEach(function(producto) {

        let fila=document.createElement("div")
        fila.classList.add("row")
        
        let columna1=document.createElement("div")
        columna1.classList.add("col-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-8")


        let foto=document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=producto.foto

        let nombrePro=document.createElement("h3")
        nombrePro.classList.add("text-center")
        nombrePro.textContent=producto.nombre

        let precioPro=document.createElement("h4")
        precioPro.classList.add("text-center")
        precioPro.textContent=producto.precio

       let cantidadPro=document.createElement("h5")
       cantidadPro.classList.add("text-center")
       cantidadPro.textContent=  "Cantidad: " + producto.cantidad    

       let subtotal=document.createElement("h5")
       subtotal.classList.add("text-center")
       subtotal.textContent= "Subtotal: $" + producto.subtotalPro


      


    

    //PADRES E HIJOS
    columna1.appendChild(foto)
    columna2.appendChild(nombrePro)
    columna2.appendChild(precioPro)
    columna2.appendChild(cantidadPro)
    columna2.appendChild(subtotal)
    fila.appendChild(columna1)
    fila.appendChild(columna2)
    basecarrito.appendChild(fila)

    })

    modalcompra.show()
    
})


