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
            //lista.innerHTML = "";
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

/*function actualizaAmigo() {
    document.getElementById("amigoAgregado").value = nuevoAmigo;
    //
}*/