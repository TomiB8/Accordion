const botones = document.querySelectorAll(".pregunta-accordion");

botones.forEach(function(boton){
    boton.addEventListener("click", function(){
        const respuestaActual = this.nextElementSibling;
        const respuestaAbierta = document.querySelector(".respuesta-box.abierta");
        const botonActivo = document.querySelector(".pregunta-accordion.activa");

        if(respuestaAbierta && respuestaAbierta !== respuestaActual){
            respuestaAbierta.classList.remove("abierta");
            botonActivo.classList.remove("activa");
        }

        respuestaActual.classList.toggle("abierta");
        this.classList.toggle("activa");
    });
});