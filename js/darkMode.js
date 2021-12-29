const btnSwitch = document.querySelector('#switch');

let logoEnPagina = "logoDark"
btnSwitch.addEventListener('click', e => {
    e.preventDefault()
     let logo = document.querySelector(".header__logo");
     if(logoEnPagina == "logoDark"){
        logo.src = "../imagenes/logo/logo_darkMode.png"
        logoEnPagina = "logoBlanco"
    }else{
        logo.src = "../imagenes/logo/logo.png"
        logoEnPagina = "logoDark"
    } 
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    // Guarda el modo en el localStorage.
    //Funciona el código, pero lo comenté porque no logré implementarlo para que cambie la imagen también
      if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});
// Modo actual en el que estamos
 if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
} else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
} 

