function showUsers() {
    document.getElementById("main-div").classList.add("hidden")
    document.getElementById("sub-div").classList.remove("hidden")
}

function showRegister() {
    document.getElementById("main-div").classList.remove("hidden");
    document.getElementById("sub-div").classList.add("hidden")
}
class User {
    constructor(name, email, birthdate, age, city, telephone, cpf, client) {
        this.name = name
        this.email = email
        this.birthdate = birthdate
        this.age = age
        this.city = city
        this.telephone = telephone
        this.cpf = cpf
        this.client = client
    }
}

class UserList {
    constructor() {
        this.users = [];
    }
    addUser(param){
        this.users.push(param)
    }
}

let msg = "";
const arrList = new UserList()
function isAnyImputAmpty() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const birthdate = document.getElementById("birthdate").value
    const address = document.getElementById("address").value
    const phone = document.getElementById("phone").value
    const cpf = document.getElementById("cpf").value

    if (name == "" || email == "" || birthdate == "" || address == "" || phone == "" || cpf == "") {
        msg = "preencha todos os campos!!"
    }
    document.getElementById("error-msg").innerHTML = msg
}
function clearField(){
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("birthdate").value = ""
    document.getElementById("address").value = ""
    document.getElementById("phone").value = ""
    document.getElementById("cpf").value = ""
}

function createUser(){
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const birthdate = document.getElementById("birthdate").value
    const address = document.getElementById("address").value
    const phone = document.getElementById("phone").value
    const cpf = document.getElementById("cpf").value

    const user = new User(name, email, birthdate, address, phone, cpf);

    isAnyImputAmpty();
    sendErrorMsg(msg)
    arrList.addUser(user)
    clearField()
    
}

function sendErrorMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");
    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}

