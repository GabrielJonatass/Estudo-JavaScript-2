for( let i = 10; i > 0; i = i - 1) {

    if(i % 2 == 0) {                   //// Nesse caso cai no continue sempre que o numero for par
        console.log("Caiu no continue"); 
        continue;
    }

    console.log(i);

}

// serve para pularmos uma condição do loop quando atingimos uma determinada condição