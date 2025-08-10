const listaUsuarios = document.getElementById("lista-usuarios");
let usuarioSelecionado = null;
const url = "https://jsonplaceholder.typicode.com/users/";

preencheLista();

function checaAdmin() {
    let formulario = document.getElementById("formulario-entrada");
    formulario.addEventListener("submit", (entrar) => {
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

async function preencheLista() {
    const usuarios = await getUsuarios();
    
    for (let usuario of usuarios) {
        let linhaLista = document.createElement("li");
        linhaLista.innerText = usuario.name;
        linhaLista.tabIndex = -1;

        linhaLista.addEventListener("click", () => {
            usuarioSelecionado = [usuario.name, usuario.id];
        });

        listaUsuarios.appendChild(linhaLista);

    }
}

async function getUsuarios() {
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        return data;
        
    } else {
        return alert("Erro HTTP: " + response.status);
    }
}

async function alteraNome() {
    if (usuarioSelecionado != null) {
        let novoNome = window.prompt("Insira o novo nome:", usuarioSelecionado[0]);

        for (let usuario of listaUsuarios.children) {
            if (usuario.innerText === usuarioSelecionado[0]) {
                usuario.innerText = novoNome;
                break;
            }
        }
        
        const response = await fetch(url + usuarioSelecionado[1], {
            method: "PATCH",
            body: JSON.stringify({
                name: novoNome,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }); 

        if (response.ok) {
            listaUsuarios.innerText = "";
            await preencheLista();
        } else {
            alert("Erro ao alterar nome: " + response.status);
        }
    }
}

async function removeUsuario() {
    if (usuarioSelecionado != null) {
        let remover = window.confirm(`Tem certeza de que quer remover ${usuarioSelecionado[0]}?`);

        if (remover == true) {
            const response = await fetch(url + usuarioSelecionado[1], {
                method: "DELETE",
            });

            if (response.ok) {
                listaUsuarios.innerText = "";
                await preencheLista();
            } else {
            alert("Erro ao remover usuário: " + response.status);
        }
        }
    }
}