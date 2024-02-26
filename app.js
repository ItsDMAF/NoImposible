function MoverNo() {
    var NoBtn = document.getElementById("NoBtn");
    var Mensaje = document.getElementById("Mensajito");
    var SiBtn = document.getElementById("SiBtn");
    var Titulo = document.querySelector("h1");

    var SiBtbRect = SiBtn.getBoundingClientRect();
    var TituloRect = Titulo.getBoundingClientRect();

    var MaxDistX = window.innerWidth / 3; 
    var MaxDistY = window.innerHeight / 4; 

    var NewPosX;
    var NewPosY;

    do {
        NewPosX = Math.floor(Math.random() * (MaxDistX * 2) + (window.innerWidth / 2 - MaxDistX));
        NewPosY = Math.floor(Math.random() * (MaxDistY * 2) + (window.innerHeight / 2 - MaxDistY));
    } while (
        //Revisa si la nueva posición esta por ensima del otro botton (Si).
        (NewPosX < SiBtbRect.right && NewPosX + NoBtn.offsetWidth > SiBtbRect.left &&
         NewPosY < SiBtbRect.bottom && NewPosY + NoBtn.offsetHeight > SiBtbRect.top) ||
        //Revisa si la nueva posición esta por ensima del titulo.
        (NewPosX < TituloRect.right && NewPosX + NoBtn.offsetWidth > TituloRect.left &&
         NewPosY < TituloRect.bottom && NewPosY + NoBtn.offsetHeight > TituloRect.top)
    );

    NoBtn.style.position = "absolute";
    NoBtn.style.left = NewPosX + "px";
    NoBtn.style.top = NewPosY + "px";
    Mensaje.style.display = "none";
}

function VerMensaje() {
    var Mensaje = document.getElementById("Mensajito");
    var NoBtn = document.getElementById("NoBtn");
    var ResetBtn = document.getElementById("resetBtn");
    var Imagen = document.getElementById("Imagen");

    //Esconde el botton(No) y enseña el mensaje y la imagen al tocar el otro botton(Si).
    NoBtn.style.display = "none";
    Mensaje.style.display = "block";
    Imagen.style.display = "block";

    //Enseña el botton de reset.
    ResetBtn.style.display = "block";
}


document.getElementById("resetBtn").addEventListener("click", function () {
    location.reload();
});