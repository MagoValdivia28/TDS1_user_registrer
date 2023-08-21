class User {
    constructor(name, email, birthdate, city, telephone, cpf) {
        this.name = name
        this.email = email
        this.birthdate = birthdate
        this.city = city
        this.telephone = telephone
        this.cpf = cpf
        this.age = this.getPersonAge()
        this.zodiac = this.getZodiacSign()
        this.client = this.possibleClient();

    }

    getZodiacSign() {
        let birthdate = new Date(this.birthdate);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");
        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }

    getPersonAge() {
        console.log("passou pela conta da idade");

        const birthdaydate = this.birthdate;
        const birthYear = new Date(birthdaydate).getFullYear();
        const weYear = new Date().getFullYear();
        const birthMonth = new Date(birthdaydate).getMonth() + 1;
        const weMonth = new Date().getMonth() + 1;

        const age = weYear - birthYear;
        if (birthMonth > weMonth) {
            return age - 1;
        } else {
            return age;
        }
    }
    possibleClient() {
        let client = 0;
        if (this.age < 18 || this.age > 26) {
            return "não é um possível cliente"
        } if (this.age >= 18 || this.age <= 26) {
            return "É um possível cliente"
        }
    }

}

class UserList {
    constructor() {
        this.users = [];
    }
    addUser(param) {
        if (isAnyImputAmpty()) {
            sendErrorMsg("Preecha todos os campos")
        } else if (!valida_cpf(param.cpf)) {
            sendErrorMsg("CPF Invalido");
        } else if (isAlredyExiste(param.cpf)) {
            sendErrorMsg("CPF ja cadastrado");
        } else {
            sendSucessMsg()
            this.users.push(param)
            clearField();
        }

    }

    getArray(){
        return this.users;
    }
}
function sendSucessMsg() {
    document.getElementById("success-msg").innerHTML = "Parabens, você entrou na lista de espera!"
}

function showUsers() {
    document.getElementById("main-div").classList.add("hidden")
    document.getElementById("sub-div").classList.remove("hidden")
    showAllUser()
}

function showRegister() {
    document.getElementById("main-div").classList.remove("hidden");
    document.getElementById("sub-div").classList.add("hidden")
}

let msg = "";
const arrList = new UserList();

function isAlredyExiste(cpf) {
    const array =  arrList.users();
    return array.some(user => user.cpf === cpf);

}

function isAnyImputAmpty() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const birthdate = document.getElementById("birthdate").value
    const city = document.getElementById("address").value
    const telephone = document.getElementById("phone").value
    const cpf = document.getElementById("cpf").value

    if (name == "" || email == "" || birthdate == "" || city == "" || telephone == "" || cpf == "") {
        return true;
    } else {
        return false;
    }

}
function clearField() {
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("birthdate").value = ""
    document.getElementById("address").value = ""
    document.getElementById("phone").value = ""
    document.getElementById("cpf").value = ""
}
function createUser() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const birthdate = document.getElementById("birthdate").value
    const city = document.getElementById("address").value
    const telephone = document.getElementById("phone").value
    const cpf = document.getElementById("cpf").value

    const user = new User(name, email, birthdate, city, telephone, cpf);

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
function showAllUser() {
    let showingUsers = '';
    arrList.users.forEach((user) => {
        showingUsers += `
        <div class="list-eachUser">
            <p><b>nome:</b>${user.name}</p>
            <p><b>email:</b>${user.email}</p>
            <p><b>Data de nascimento:</b>${user.birthdate}</p>
            <p><b>idade:</b>${user.age}</p>
            <p><b>signo:</b>${user.zodiac}</p>
            <p><b>cidade:</b>${user.address}</p>
            <p><b>celular:</b>${user.telephone}</p>
            <p><b>cpf:</b>${user.cpf}</p>
        </div>
        `
    })
    document.getElementById("user-list").innerHTML = showingUsers
    document.getElementById("contador").innerHTML = `total:${arrList.users.length}`
}
function formatedCPF(cpf) {
    console.log("Passou pela funcao formatedCPF()");
    let cpfArray = cpf.split("");
    let cpfFormated = cpfArray[0] + cpfArray[1] + cpfArray[2]
        + "." + cpfArray[3] + cpfArray[4] + cpfArray[5] + "."
        + cpfArray[6] + cpfArray[7] + cpfArray[8] + "-" + cpfArray[9] + cpfArray[10];
    return cpfFormated;
}
function formatedCellphone(cellphone) {
    console.log("Passou pela funcao formatedCellphone()");
    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}
function valida_cpf(cpf) {
    console.log("Passou pela funcao valida_cpf()");
    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
        return false;
    for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = cpf.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else
        return false;
}