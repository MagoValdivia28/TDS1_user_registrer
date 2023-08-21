function showUsers(){
    document.getElementById("main-div").classList.add("hidden")
    document.getElementById("sub-div").classList.remove("hidden")
}

function showRegister(){
    document.getElementById("main-div").classList.remove("hidden");
    document.getElementById("sub-div").classList.add("hidden")
}
class User{
    constructor(name, email, birthdate, age, city, telephone, cpf, client){
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

class UserList{
    constructor(){
        this.users = [];
    }
}


