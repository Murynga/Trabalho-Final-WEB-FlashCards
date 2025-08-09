const listaUsuarios = document.getElementById("lista-usuarios");
let usuarioSelecionado;

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
/** Agora, para o desenvolvimento do uso da API:
 * 
 * Vamo botar uma lista em baixo com os usuários fakes do https://jsonplaceholder.typicode.com
 * colocar um botão de editar as informações de cada um (o jsonplaceholder permite isso, mas vai ser só visual, tipo como é feito aqui https://exemplos-one.vercel.app/ex-02/index.html) (isso vai ser um método PUT ou PATCH)
 * colocar um botão de deletar (isso vai ser um método DELETE)
 * 
 * Quanto ao visual da API:
 * Vamo colocar só uma listinha simples de usuários que adiciona o nome deles com um for e createElement("li")
 * Essa lista vai só mostrar os nomes dos usuários, e embaixo dela vai ter os botões de editar nome e deletar.
 */

async function preencheLista() {
    const usuarios = await getUsuarios();
    
    for (let usuario of usuarios) {
        let linhaLista = document.createElement("li");
        linhaLista.innerText = usuario.name;
        linhaLista.tabIndex = -1;

        linhaLista.addEventListener("click", () => {
            usuarioSelecionado = usuario.name;
        });

        listaUsuarios.appendChild(linhaLista);

    }
}

async function getUsuarios() {
    const url = "https://jsonplaceholder.typicode.com/users/";
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        return data;
        
    } else {
        return alert("Erro HTTP: " + response.status);
    }
}

function alteraNome() {
    
}

function removeUsuario() {
    
}