
let randomNumero;
let boton = document.querySelector(".section__button");
let botonLimpiar =  document.querySelector(".borrarDatos");
let textoResultado = document.getElementById("resultado");
let estadisticas = document.getElementById("estadisticas");
let exitos = localStorage.getItem("exitos", "valorExito") || 0;
let fallos = localStorage.getItem("fallos", "valorFallo") || 0;