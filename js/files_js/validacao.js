//Função anonima
validarForm = function(){

    //Buscar os valores dos elementos da tela 
    let cpf = document.getElementById('CPF');
    let sexo = document.querySelectorAll('input[name="sexo"]:checked');
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let data = document.getElementById('dtNasc');
    let descricao = document.getElementById('descricao');

    //Zerar os erros dos campos
    document.getElementById('erroCPF').innerHTML = "";
    document.getElementById('erroSexo').innerHTML = "";
    document.getElementById('erroNome').innerHTML = "";
    document.getElementById('erroEmail').innerHTML = "";
    document.getElementById('erroDtNasc').innerHTML = "";
    document.getElementById('erroDescricao').innerHTML = "";

    //Guardo a quantidade de erros que ocorrer na tela
    let erro = 0;

    /* ERROS DO CAMPO NOME */
    //verificar se o é realmente um número o valor informado
    if(isNaN(parseInt(cpf.value))){
        document.getElementById('erroCPF').innerHTML += "O CPF digitado contém caracteres não númericos!!! <br>";
        erro++;
    }else
    //verificar se o valor são 11 digitos
    if(cpf.value.length !== 11){
        document.getElementById('erroCPF').innerHTML += "O CPF digitado é inválido!!!<br>";
        erro++;
    }
    
     /* ERRO DO CAMPO SEXO */
    if(sexo.length == 0){
        document.getElementById('erroSexo').innerHTML += "Selecione um sexo!!!<br>";
        erro++;
    }

     /* ERRO DO CAMPO NOME */
    if(nome.value === ''){
        document.getElementById('erroNome').innerHTML += "Digite um nome!!!<br>";
        erro++;
    }else if(nome.value.length <= 7){
        document.getElementById('erroNome').innerHTML += "Digite um nome com mais de 7 caracteres<br>";
        erro++;
        //Verifica nome e sobrenome
    }else if(nome.value.split(' ').length < 2){
        document.getElementById('erroNome').innerHTML += "Digite um nome e o sobrenome<br>";
        erro++;
    }

    //Filtro de e-mail do stackoverflow
    let filtroEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if(email.value === ''){
        document.getElementById('erroEmail').innerHTML += "Digite um e-mail!!!<br>";
        erro++;
    }else if(email.value.length < 10){
        document.getElementById('erroEmail').innerHTML += "Digite um e-mail com mais de 10 caracteres!!!<br>";
        erro++;
        //verificar se o e-mail e válido 
    }else if(!filtroEmail.test(email.value)){
        document.getElementById('erroEmail').innerHTML += "Digite um e-mail válido!!!<br>";
        erro++;
    }

    if(data.value === ''){
        document.getElementById('erroDtNasc').innerHTML += "Digite a data de nascimento!!!<br>";
        erro++;
    }

    if(descricao.value === ''){
        document.getElementById('erroDescricao').innerHTML += "<br>Digite a descricao!!!<br>";
        erro++;
    }

    /* Ao final 

    mostrar na div id usuario o conteudo abaixo
    
    cpf:
    nome:
    sexo:
    e-mail:
    data de nascimento:
    descricao:
    
    */
   //verificar se não tem erro e mostrar na tela
   if(erro === 0){
    document.getElementById('usuario').innerHTML = `
    <h2>CPF: ${cpf.value}</h2>
    <h2>Nome: ${nome.value}</h2>
    <h2>Sexo: ${sexo[0].value}</h2>
    <h2>E-mail: ${email.value}</h2>
    <h2>Data de Nascimento: ${data.value}</h2>
    <h2>Descrição: ${descricao.value}</h2>
   `;
   }
};