
let randomNumero;
let boton = document.querySelector(".section__button");
let botonLimpiar =  document.querySelector(".borrarDatos");
let textoResultado = document.getElementById("resultado");
let estadisticas = document.getElementById("estadisticas");
let exitos = localStorage.getItem("valorExito", "exitos") || 0;
let fallos = localStorage.getItem("valorFallo", "fallos") || 0;


function crearRandomNumero() {
    randomNumero = Math.round(Math.random() * 10);
}

function verificarNumero() {
    let usuarioNumero = document.getElementById("numeroUsuario").value;
    parseInt(usuarioNumero);

    if(usuarioNumero === randomNumero) {
        exitos++;
        localStorage.getItem("valorExito", exitos);
        textoResultado.innerHTML = "Genial!"
        estadisticas.innerHTML = "Tienes " + exitos + " éxitos" + "y " + fallos + " fallos";
        crearRandomNumero();
    }  else {
        fallos++;
        localStorage.getItem("valorFallo", fallos);
        textoResultado.innerHTML = "Has fallado"
        estadisticas.innerHTML = "Tienes " + exitos + " éxitos" + " y " + fallos + " fallos";
    }

}

function limpiarDatos() {
    localStorage.clear();
    location.reload();
}

boton.addEventListener("click", verificarNumero);
botonLimpiar.addEventListener("click", limpiarDatos);

