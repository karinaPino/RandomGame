
let randomNumero;
let boton = document.querySelector(".section__button");
let botonLimpiar =  document.querySelector(".borrarDatos");
let textoResultado = document.getElementById("resultado");
let estadisticas = document.getElementById("estadisticas");
let exitos = localStorage.getItem("exitos") || 0;
let fallos = localStorage.getItem("fallos") || 0;


function crearRandomNumero() {
    randomNumero = Math.round(Math.random() * 8);
    console.log(randomNumero)
}

function verificarNumero() {
    let usuarioNumero = document.getElementById("numeroUsuario").value;
    usuarioNumero = parseInt(usuarioNumero);    

    if(usuarioNumero === randomNumero) {
        exitos++;
        localStorage.setItem("exitos", exitos);
        textoResultado.innerHTML = "Genial!"
        estadisticas.innerHTML = "Tienes " + exitos + " éxitos" + " y " + fallos + " fallos";
        crearRandomNumero();
    }  else {
        fallos++;
        localStorage.setItem("fallos", fallos);
        textoResultado.innerHTML = "Has fallado"
        estadisticas.innerHTML = "Tienes " + exitos + " éxitos" + " y " + fallos + " fallos";
    }

}

function limpiarDatos() {
    localStorage.clear();
    location.reload();
}

crearRandomNumero();

boton.addEventListener("click", verificarNumero);
botonLimpiar.addEventListener("click", limpiarDatos);

estadisticas.innerHTML = "Tienes " + exitos + " éxitos" + " y " + fallos + " fallos";

