 
const botaoMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
    const aberto = menu.classList.toggle("aberto");

    botaoMenu.setAttribute("aria-expanded", aberto);

    botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );

    botaoMenu.textContent = aberto ? "✕" : "☰";
});


const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");

        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.setAttribute("aria-label", "Abrir menu");

        botaoMenu.textContent = "☰";
    });
});


const saudacao = document.getElementById("saudacao");
const hora = new Date().getHours();

let cumprimento;

if (hora >= 5 && hora < 12) {
    cumprimento = "Bom dia";
} else if (hora >= 12 && hora < 18) {
    cumprimento = "Boa tarde";
} else {
    cumprimento = "Boa noite";
}

saudacao.innerHTML = `${cumprimento}! Eu sou <span>Letícia</span>.`;


const ano = document.getElementById("ano");

ano.textContent = new Date().getFullYear();


const formulario = document.getElementById("formulario");
const statusFormulario = document.getElementById("status-formulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (!formulario.checkValidity()) {
        formulario.reportValidity();

        statusFormulario.textContent =
            "Por favor, preencha todos os campos corretamente.";

        return;
    }

    statusFormulario.textContent =
        "Formulário validado com sucesso! Esta é apenas uma demonstração.";

    formulario.reset();
});