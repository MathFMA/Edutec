function register(){
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const passwordconfirmation = document.querySelector("#password-confirmation").value

    if  (name === "" || email === "" || password === "" || passwordconfirmation === ""){
        alert("preencha todas as informações")
        return
    }


    if (password != passwordconfirmation){
        alert("as senhas não conferem. Digite as senhas novamente")
        document.querySelector("#password").value = ""
        return
    }
}

const button = document.querySelector("formu button")
button.addEvenListener("click", (event) =>{
    event.preventDefault()
    register()
})