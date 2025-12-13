function saludar() {
    let nombre = document.getElementById("nombre").value;

    let mensaje ="¡hola, " + nombre + "! bienvenido/a al ejercisio de html, css y js.";

    document.getElementById("mensaje").innerText = mensaje;
}