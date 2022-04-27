import {getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let boton=document.getElementById("boton-registro")

let modalRegistro= new bootstrap.Modal(document.getElementById('mensaje-form'))

let textoModal=document.getElementById("mensaje")

boton.addEventListener("click",function(evento) {
    evento.preventDefault()
    let email=document.getElementById("email").value 
    let password=document.getElementById("password").value


    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Exito en el registro")
        textoModal.textContent= "exito en el registro"
        modalRegistro.show()
        let formulario=document.getElementById("formulario-registro")
        formulario.reset()
        setTimeout(function(){
          modalRegistro.hide()

        },2000)
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
       console.log("fallo " +errorMessage)
       textoModal.textContent= "Fallo en el registro "+errorMessage
       modalRegistro.show()

       setTimeout(function() {
         modalRegistro.hide()
       },2000)

      });
})


