

 export function llenarTienda() {

//Creando un arreglo de objetos 

  let productos=[

    { foto: "img/imagen1.jpg",  nombre:"camiseta", precio:"150000",descripcion:"camiseta original red bull racing"}, 

    { foto: "img/imagen2.jpg",  nombre:"gorra",precio:"125000",descripcion:"gorra original red bull racing"},
     
    { foto: "img/imagen3.jpg",  nombre:"chanclas",precio:"120000",descripcion:"chanclas original red bull racing"},

    { foto: "img/imagen4.jpg",  nombre:"sudadera",precio:"150000",descripcion:"sudadera original red bull racing"},

    { foto: "img/imagen5.jpg",  nombre:"pocillo",precio:"150000",descripcion:"pocillo original red bull racing"},
 
    { foto: "img/imagen6.jpg",  nombre:"buso",precio:"170000",descripcion:"buso original red bull racing"},
 
    { foto: "img/imagen7.jpg",  nombre:"carro a escala",precio:"300000",descripcion:"carro a escala original red bull racing"},
 
    { foto: "img/imagen8.jpg",  nombre:"Tenis",precio:"200000",descripcion:"Tenis original red bull racing"}, 

    { foto: "img/imagen9.jpg",  nombre:"manos libres",precio:"125000",descripcion:"manos libres original red bull racing"}, 

    { foto: "img/imagen10.jpg", nombre:"termo",precio:"130000",descripcion:"termo original red bull racing"},   

]


 let fila=document.getElementById("fila")

 productos.forEach(function (ejemplo) {
 /* console.log(ejemplo.nombre)
  console.log(ejemplo.precio)
  console.log(ejemplo.descripcion)   
*/

  let columna=document.createElement("div")
  columna.classList.add("col")

  let targeta=document.createElement("div")
  targeta.classList.add("card")
  targeta.classList.add("h-100")

  let imagen=document.createElement("img")
  imagen.classList.add("card-img-top")
  imagen.src=ejemplo.foto


  let titulo=document.createElement("h3")
  titulo.classList.add("text-center")
  titulo.textContent= ejemplo.nombre

  let dinero=document.createElement("h4")
  dinero.classList.add("text-center")
  dinero.textContent= "$" + ejemplo.precio
  
  let descripcionP=document.createElement("h5")
  descripcionP.classList.add("text-center")
  descripcionP.textContent= ejemplo.descripcion

let boton=document.createElement("button")
boton.classList.add("btn")
boton.classList.add("btn-outline-dark")
boton.classList.add("m-3")
boton.textContent = "Ver productos"


  
targeta.appendChild(imagen)
targeta.appendChild(titulo)
targeta.appendChild(dinero)
targeta.appendChild(descripcionP)
targeta.appendChild(boton)

columna.appendChild(targeta)
fila.appendChild(columna)

 })
  
}







 






