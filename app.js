// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

/*function actualizaAmigo(elemento, value) {
    let lista = document.getElementById(elemento);
    lista.innerHTML = value;
    return;
}*/


function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value;
    let lista = document.getElementById("listaAmigos");
    console.log (nuevoAmigo);
    console.log (amigos);
        if (nuevoAmigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        if (amigos.includes(nuevoAmigo)){
            limpiarCampo();
        } else {
        //actualizaAmigo("amigoAgregado", nuevoAmigo);
        amigos.push(nuevoAmigo);
        limpiarCampo();
        agregaLista(nuevoAmigo, lista);
        }
    }
}

function limpiarCampo() {
    document.getElementById("amigo").value = "";
}

function agregaLista(nombre, lista) {
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);
}

function mostrarResultado(elemento,texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert ("Opción no válida. Por favor, inserte un nombre.")
    } else {
        let indiceAmigo = Math.floor(Math.random()*amigos.length)+1;
        console.log (indiceAmigo);
        let amigoSorteado = amigos [indiceAmigo -1];
        console.log (amigoSorteado);
        mostrarResultado("resultado", amigoSorteado);
        document.getElementById("listaAmigos").innerHTML = "";
        
    }
}

/*function actualizaAmigo() {
    document.getElementById("amigoAgregado").value = nuevoAmigo;
    //
}*/