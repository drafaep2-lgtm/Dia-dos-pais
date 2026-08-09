/* =====================================
   SITE DE DIA DOS PAIS
   Para Eliedson 💚
===================================== */


/* =====================================
   ABRIR A HOMENAGEM
===================================== */

function abrirHomenagem() {

    const homenagem =
        document.getElementById("homenagem");

    homenagem.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    criarCoracoes();

}


/* =====================================
   MOSTRAR SURPRESA
===================================== */

function mostrarSurpresa() {

    const surpresa =
        document.getElementById("surpresa");

    const botao =
        document.querySelector(".botao-surpresa");

    if (surpresa.classList.contains("ativa")) {

        surpresa.classList.remove("ativa");

        botao.innerHTML =
            "🎁 Clique aqui";

        return;
    }


    surpresa.classList.add("ativa");

    botao.innerHTML =
        "💚 Você é demais, pai!";


    criarConfetes();

}


/* =====================================
   CORAÇÕES FLUTUANTES
===================================== */

function criarCoracoes() {

    const simbolos = [
        "💚",
        "💚",
        "🤍",
        "💚",
        "🏆"
    ];


    for (let i = 0; i < 18; i++) {

        const coracao =
            document.createElement("div");

        coracao.innerHTML =
            simbolos[
                Math.floor(
                    Math.random() *
                    simbolos.length
                )
            ];


        coracao.style.position =
            "fixed";

        coracao.style.left =
            Math.random() * 100 + "vw";

        coracao.style.bottom =
            "-50px";

        coracao.style.fontSize =
            (18 + Math.random() * 20) + "px";

        coracao.style.zIndex =
            "9999";

        coracao.style.pointerEvents =
            "none";

        coracao.style.transition =
            "transform 4s linear, opacity 4s linear";


        document.body.appendChild(coracao);


        setTimeout(() => {

            coracao.style.transform =
                `translateY(-${window.innerHeight + 100}px)
                 rotate(${Math.random() * 360}deg)`;

            coracao.style.opacity =
                "0";

        }, 50);


        setTimeout(() => {

            coracao.remove();

        }, 4200);

    }
}


/* =====================================
   CONFETES
===================================== */

function criarConfetes() {

    const simbolos = [
        "💚",
        "🤍",
        "🏆",
        "⭐",
        "⚽"
    ];


    for (let i = 0; i < 35; i++) {

        const confete =
            document.createElement("div");


        confete.innerHTML =
            simbolos[
                Math.floor(
                    Math.random() *
                    simbolos.length
                )
            ];


        confete.style.position =
            "fixed";

        confete.style.left =
            Math.random() * 100 + "vw";

        confete.style.top =
            "-40px";

        confete.style.fontSize =
            (14 + Math.random() * 18) + "px";

        confete.style.zIndex =
            "9999";

        confete.style.pointerEvents =
            "none";

        confete.style.transition =
            `top ${2 + Math.random() * 2}s linear,
             transform ${2 + Math.random() * 2}s linear,
             opacity 3s`;


        document.body.appendChild(confete);


        setTimeout(() => {

            confete.style.top =
                "110vh";

            confete.style.transform =
                `rotate(${Math.random() * 720}deg)`;

            confete.style.opacity =
                "0";

        }, 50);


        setTimeout(() => {

            confete.remove();

        }, 4500);

    }
}


/* =====================================
   ANIMAÇÃO AO ENTRAR NA TELA
===================================== */

const elementos =
    document.querySelectorAll(
        ".homenagem, .fotos, .campeao, .surpresa"
    );


const observador =
    new IntersectionObserver(
        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity =
                        "1";

                    entrada.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }
    );


elementos.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(40px)";

    elemento.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    observador.observe(elemento);

});


/* =====================================
   MENSAGEM NO CONSOLE
===================================== */

console.log(
    "💚 Site especial criado para o pai Eliedson!"
);

console.log(
    "🏆 Feliz Dia dos Pais!"
);
const envelope = document.getElementById("envelope");
const cartaAberta = document.getElementById("cartaAberta");

envelope.addEventListener("click", function() {
    envelope.style.display = "none";
    cartaAberta.style.display = "block";
});