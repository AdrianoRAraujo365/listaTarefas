//var x = 10;
//const y = 'Teste';
//let z = 20;


// const - Não podemos reatribuir o valor de uma const
//isso vale para tipos primitivos, como inteiro e string
// const x = 10;
// x = 20; //ERRO

// const x = 'Bom dia';
// x = 'Boa tarde'; //ERRO

// let x = 10;
// let x = 20; //ERRO
// console.log(x);

// let x = 30;
// x = 40; //Podemos alterar o valor da variável
// console.log(x)

// const usuario = {nome: 'Admin', senha: 1234};
// usuario.nome = 'Admin 02';
// console.log(usuario);




// let y = 'Bom dia';
// y = 'Boa tarde';
// console.log(y);




//var
// var x = 10;
// if (true){
//   console.log(x);
// }





// //var
// if (true){
//   var x = 20;
// }
// console.log(x);


// let e const possuem escopo de bloco, ou seja, 
// funciona apenas dentro do bloco/função em que foi criado

//let
// if (true) {
//   let x = 30; //Erro
//   console.log(x);
// }



// //let
function imprimeValor(){
  const x = 50;
  if (true) {
    if (true){
      console.log(x);
    }
  }
}

imprimeValor();


//const
// function imprimeValor(){
//   const x = 50;
//   if (true) {
//     if (true){
//     }
//   }
//   console.log(x);
// }
// imprimeValor();


function trocarCor01(){
  document.getElementById('primeiro_paragrafo').style.background = 'blue'
}

//                    //Parametros  
function trocarCor02(idElemento, cor){
  console.log(`${idElemento} --- ${cor}`);
  //document.getElementById(idElemento).style.backgroundColor = cor;
}
          //Argumentos
trocarCor('paragrafo_inicial', 'red');
