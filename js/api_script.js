function checaAdmin() {
    let formulario = document.getElementById("formulario-entrada");
    formulario.addEventListener("submit", function(entrar) {
        entrar.preventDefault();
        let usuario = formulario.elements[0].value;
        let senha = formulario.elements[1].value;
        if (usuario === "Admin@123" && senha === "Admin@123") {
            window.location.href = "/pages/administracao.html";
        } else {
            window.location.href = "/pages/escolher_treino.html";
        }
    });
}