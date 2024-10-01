let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let passwordElement = document.querySelector("#Password"); // Corrigido o ID para "Password"
let containerPassword = document.querySelector("#container-password");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value;
}

buttonElement.onclick = function () {
    generatePassword();
}

function generatePassword() {
    let pass = '';
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    console.log(pass);
    containerPassword.classList.remove("hide");
    passwordElement.innerHTML = pass; // Corrigido para "passwordElement"
    novaSenha = pass;
}

passwordElement.onclick = function () {
    copyPassword();
}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha)
        .then(() => {
            alert("Senha copiada com sucesso!");
        })
        .catch(err => {
            console.error("Erro ao copiar senha: ", err);
        });
}
