document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const cpf = document.getElementById("CPF");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("CEP");
    const aplicarCupomDesconto = document.getElementById(
        "aplicar-cupom-desconto"
    );
    const iconDown = document.querySelector(".bxs-chevron-down");
    const iconUp = document.querySelector(".bx-chevron-up");
    const aplicarCupomDescontoCorpo = document.querySelector(
        ".aplicar-cupom-desconto-corpo"
    );
    const aplicarCupomDescontoCorpoNone = document.querySelector(
        ".aplicar-cupom-desconto-corpo-none"
    );
    const inputDesconto = document.getElementById("input-desconto");
    const btnAplicarDesconto = document.getElementById("btn-aplicar-desconto");
    const precoTotal = document.querySelector(".preco-total");

    form.addEventListener("submit", (e) => {
        result();
        e.preventDefault();

        let dados = new FormData(form);
        for (let [chave, valor] of dados.entries()) {
            console.log(`${chave}: ${valor}`);
        }
    });

    cpf.addEventListener("input", () => {
        const maxDigits = 11;
        let value = cpf.value;

        if (value.length > maxDigits) {
            cpf.value = value.slice(0, maxDigits);
        }
    });

    telefone.addEventListener("input", () => {
        const maxDigits = 11;
        let value = telefone.value;

        if (value.length > maxDigits) {
            telefone.value = value.slice(0, maxDigits);
        }
    });

    cep.addEventListener("input", () => {
        const maxDigits = 8;
        let value = cep.value;

        if (value.length > maxDigits) {
            cep.value = value.slice(0, maxDigits);
        }
    });

    function result() {
        if (cpf.value.length < 11) {
            alert("Por favor digite os 11 números do CPF!");
        }

        if (telefone.value.length < 11) {
            alert("Por favor digite os 11 números do Telefone!");
        }

        if (cep.value.length < 8) {
            alert("Por favor digite os 8 digítos do CEP!");
        }
    }

    iconDown.addEventListener("click", () => {
        iconDown.classList.toggle("down");
        iconDown.classList.toggle("iconUp");
        aplicarCupomDescontoCorpoNone.classList.toggle(
            "aplicar-cupom-desconto-corpo-none"
        );
        aplicarCupomDescontoCorpoNone.classList.toggle(
            "aplicar-cupom-desconto-corpo-block"
        );
    });
    console.log(btnAplicarDesconto);
    btnAplicarDesconto.addEventListener("click", () => {
        if (inputDesconto.value === "DESCONTO10") {
            precoTotal.textContent = "Preço Total: R$1080.00";
            console.log("disparando");
            const mensagemDesconto = document.createElement("p");
            mensagemDesconto.textContent = "Desconto aplicado de 10%";
            mensagemDesconto.style.fontSize = "16px";
            mensagemDesconto.style.color = "green";
            mensagemDesconto.style.marginTop = "20px";
            mensagemDesconto.style.marginBottom = "20px";
            btnAplicarDesconto.insertAdjacentElement(
                "afterend",
                mensagemDesconto
            );
        }
    });
});
