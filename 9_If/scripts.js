let idade = 19;
let nome = "Gabriel";
let passaporte = true;

if (idade >18) {
    console.log("Voce pode entrar");
}

if (idade == 19) {
    console.log("A idade é = 19");
}

if (idade < 12) {
 console.log("Voce não pode entrar");
}

if (nome == "Gabriel"  && idade > 15) {
    console.log("Acesso Liberado")
}

if ((nome == "Gabriel"  &&  idade > 45 ) || passaporte == true ) {
    console.log("Acesso Liberado 2")
}


