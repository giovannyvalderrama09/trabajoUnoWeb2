// Controlando etiquetas 

//1. crear una variable para guardar una variable

let etiquetaTitulo=document.getElementById("titulo")
console.log(etiquetaTitulo)

// 2. como modificar el texto de una etiqueta 
etiquetaTitulo.textContent="Un texto de ejemplo"

let etiquetaMenu=document.getElementById("menu")
etiquetaMenu.textContent= "red bull"
 
//controlando una imagen 

let etiquetaImagen=document.getElementById("imgred")
etiquetaImagen.src="img/3.jpg" 

//Cambiar el estilo de la etiqueta  
etiquetaTitulo.classList.add("text-center")
etiquetaTitulo.classList.add("text-danger") 