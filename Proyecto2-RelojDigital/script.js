function calcularTiempo() {

    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

    let ampm = hora >= 12 ? "PM" : "AM";
    //Establece formato a 12 horas si hora es 12 la establece en 0
    //hora = hora % 12;

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;


    let pantallaReloj = hora + ":" + minuto + ":" + segundo + " " + ampm;
    let relojDigital = document.querySelector(".reloj");
    relojDigital.innerHTML = pantallaReloj;

}
setInterval(calcularTiempo, 1000);
