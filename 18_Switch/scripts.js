let nome = "Gabriel";

switch(nome) {
    case "Gabriel":
        console.log("O seu nome é Gabriel");
        break;                                                        /// temos que colocar o break senão ele exeuta a outra condicional também
    case "João":
        console.log("O seu nome é João");
        break;
    default: 
    console.log("O nome não foi encontrado");
    break;
}


// if(nome == "Gabriel") {                             /// Comparação usando o if e else 
//     console.log("O nome é Gabriel");
// } else {
//     console.log("O nome não foi encontraddo");
// }
