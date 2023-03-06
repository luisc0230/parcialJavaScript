const mario = document.getElementById('mario');
const inputUsuario = document.getElementById('input-usuario');
const inputClave = document.getElementById('input-clave');
const inputDiv = document.getElementById('div1');
const body = document.querySelector('body');
const anchoMitad = window.innerWidth / 2; 
const altoMitad = window.innerHeight / 2; 


inputClave.addEventListener('focus',()=>{
  
    mario.src = "./img/cover/mario_cerrando_los_ojos.png"
})

inputClave.addEventListener('blur',()=>{
    mario.src = "./img/read/mario_mirando.png"
})

function redireccion(){
    // if(user =="mario" && clave =="123"){
    //     window.location="productos.html";
    // }else{
    //     // Swal.fire({
    //     //     icon: 'error',
    //     //     title: 'Usuario o Contraseña Incorrectos'
    //     //   })
    //       Swal.fire({
    //         icon: 'error',
    //         title: 'Usuario o Contraseña Incorrectos',
    //         showClass: {
    //           popup: 'animate__animated animate__fadeInDown'
    //         },
    //         hideClass: {
    //           popup: 'animate__animated animate__fadeOutUp'
    //         }
    //       })
    // }
    
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("input-usuario2").value;
        var password = document.getElementById("input-clave2").value;
        var storedUsername = localStorage.getItem("username");
        var storedPassword = localStorage.getItem("password");
        if (username !== storedUsername || password !== storedPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Usuario o Contraseña Incorrectos',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
          return;
        }
        window.location="productos.html";
      });
      
}

 
  //ocultar div1
  function ocultar(){
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "block";

    document.getElementById("register-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("input-usuario").value;
        var password = document.getElementById("input-clave").value;
        
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario Registrado en localStore',
            showConfirmButton: false,
            timer: 1500
          })
      });
  };

  //ocultar div2
  function ocultar2(){
    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.display = "none";
  }
