
let randomNumero;
let boton = document.querySelector(".section__button");
let botonLimpiar =  document.querySelector(".borrarDatos");
let textoResultado = document.getElementById("resultado");
let estadisticas = document.getElementById("estadisticas");
let exitos = localStorage.getItem("exitos", "valorExito") || 0;
let fallos = localStorage.getItem("fallos", "valorFallo") || 0;


function crearRandomNumero() {
    randomNumero = Math.random(Math.round()) * 10;
}

function verificarNumero() {
    let usuarioNumero = document.getElementById("numeroUsuario").value;
    usuarioNumero = parseInt;

    if(usuarioNumero === randomNumero) {
        exitos++;
        localStorage.getItem("exitos");
        textoResultado.innerHTML = "Genial!"
        estadisticas.innerHTML = "Tienes " + exitos + " éxitos" + "y " + fallos + " fallos";
        crearRandomNumero();
    }  else {
        fallos++;
        localStorage.getItem("fallos");
        textoResultado.innerHTML = "Has fallado"
        estadisticas.innerHTML = "Tienes " + exitos + " éxitos" + "y " + fallos + " fallos";
    }


}