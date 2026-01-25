const btnE1 = document.querySelector(".btn");
const inputE1 = document.getElementById("input");
const copyIcon = document.querySelector(".fa-copy");
const alertcontainer = document.querySelector(".alert-container");

btnE1.addEventListener("click", () => {
    createPassword()
});

copyIcon.addEventListener("click", () => {
    copyPassword();
    if (inputE1.value) {
        alertcontainer.classList.remove("active");
        setTimeout(() => {
            alertcontainer.classList.add("active");
        }, 2000);
    }
});

function createPassword() {
    const chars = "0123456789abcdeefghijklmnopqrstuvwxyz!@#$%^&*()_?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLenght = 14;
    let password = ""
    for (let i = 0; i < passwordLenght; i++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum + 1);
        console.log(randomNum, password);
    }

    inputE1.value = password;
    alertcontainer.innerText = password + "  copied !"
}

function copyPassword() {
    inputE1.select();
    inputE1.setSelectionRange(0, 9999);


    navigator.clipboard.writeText(inputE1.value);


}