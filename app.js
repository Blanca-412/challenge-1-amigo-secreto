// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
//let amigoSecreto = "";

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value;
    console.log (nuevoAmigo);
    console.log (amigos);
        if (nuevoAmigo == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nuevoAmigo);
        limpiarCampo();
        return nuevoAmigo;
    }
}

function limpiarCampo() {
    document.getElementById("amigo").value = "";
}