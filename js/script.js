// Constantes

const formulario = document.querySelector("#formulario");
const mensagem = document.querySelector("#mensagem");
const fecharMensagem = document.querySelector("#fecharMensagem");
const aviso = document.querySelector("#aviso-inscricoes");
const textoAviso = document.querySelector("#texto-aviso");
const avisoEncerradas = document.querySelector("#inscricoes-encerradas");
const tituloFormulario = document.querySelector(".form__titulo");
const themeToggle = document.querySelector("#theme-toggle");


// Modo claro e modo escuro

if (themeToggle) {

    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "dark") {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

        themeToggle.setAttribute(
            "aria-pressed",
            "true"
        );

        themeToggle.setAttribute(
            "aria-label",
            "Ativar modo claro"
        );

        const icone = themeToggle.querySelector("span");

        if (icone) {
            icone.textContent = "☀️";
        }
    }

    themeToggle.addEventListener("click", function() {

        const modoEscuro =
            document.documentElement.getAttribute("data-theme") === "dark";

        if (modoEscuro) {

            document.documentElement.removeAttribute(
                "data-theme"
            );

            themeToggle.setAttribute(
                "aria-pressed",
                "false"
            );

            themeToggle.setAttribute(
                "aria-label",
                "Ativar modo escuro"
            );

            const icone = themeToggle.querySelector("span");

            if (icone) {
                icone.textContent = "🌙";
            }

            localStorage.setItem(
                "tema",
                "light"
            );

        } else {

            document.documentElement.setAttribute(
                "data-theme",
                "dark"
            );

            themeToggle.setAttribute(
                "aria-pressed",
                "true"
            );

            themeToggle.setAttribute(
                "aria-label",
                "Ativar modo claro"
            );

            const icone = themeToggle.querySelector("span");

            if (icone) {
                icone.textContent = "☀️";
            }

            localStorage.setItem(
                "tema",
                "dark"
            );
        }
    });
}


// Recuperação das inscrições

const inscricoes = JSON.parse(
    localStorage.getItem("inscricoes") || "[]"
);


// Ocultar formulário quando as inscrições estiverem encerradas

if (
    formulario &&
    avisoEncerradas &&
    inscricoes.length >= 2
) {

    formulario.style.display = "none";

    if (tituloFormulario) {
        tituloFormulario.style.display = "none";
    }

    avisoEncerradas.style.display = "flex";
}


// Função para submissão do formulário

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const dados = {
            nome: document.querySelector("#nome").value,
            email: document.querySelector("#email").value,
            cpf: document.querySelector("#cpf").value,
            telefone: document.querySelector("#telefone").value,
            projeto: document.querySelector("#projeto").value
        };


        // Recuperar inscrições atualizadas

        const inscricoesAtualizadas = JSON.parse(
            localStorage.getItem("inscricoes") || "[]"
        );


        // Verificar limite de inscrições

        if (inscricoesAtualizadas.length >= 2) {

            formulario.style.display = "none";

            if (tituloFormulario) {
                tituloFormulario.style.display = "none";
            }

            if (avisoEncerradas) {
                avisoEncerradas.style.display = "flex";
            }

            return;
        }


        // Adicionar nova inscrição

        inscricoesAtualizadas.push(dados);


        // Salvar inscrições

        localStorage.setItem(
            "inscricoes",
            JSON.stringify(inscricoesAtualizadas)
        );


        // Preencher mensagem de confirmação

        const mensagemNome =
            document.querySelector("#mensagemNome");

        const mensagemProjeto =
            document.querySelector("#mensagemProjeto");


        if (mensagemNome) {
            mensagemNome.textContent = dados.nome;
        }

        if (mensagemProjeto) {
            mensagemProjeto.textContent = dados.projeto;
        }


        // Exibir mensagem

        if (mensagem) {
            mensagem.style.display = "flex";
        }
    });
}


// Fechar mensagem de confirmação

if (fecharMensagem) {

    fecharMensagem.addEventListener("click", function() {

        if (mensagem) {
            mensagem.style.display = "none";
        }

        window.location.href = "index.html";
    });
}


// Aviso de inscrições na página inicial

if (aviso && textoAviso) {

    if (inscricoes.length === 1) {

        textoAviso.textContent =
            "As inscrições estão quase encerradas! Ainda temos poucas vagas para nossos projetos.";

        aviso.style.display = "block";
    }


    if (inscricoes.length >= 2) {

        textoAviso.textContent =
            "As inscrições para nossos projetos estão encerradas! Em breve abriremos novas vagas.";

        aviso.classList.add(
            "aviso-encerradas"
        );

        aviso.style.display = "block";
    }
}

