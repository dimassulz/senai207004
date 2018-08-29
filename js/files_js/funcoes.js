/*
        1 - Criar uma função onde receberá o parametro salario liquido mensal, nessa função será calculado e apresentado o valor do salario anual informado pelo usuario.
        Considerando que o salário liquido anual é o salario x 13
        */

function salarioAnual() {
    salarioLiquido = document.getElementById('salarioMensal').value;
    var result = document.getElementById('resultadoSalario');

    result.innerHTML = "<h1>O salário liquido " + (salarioLiquido * 13) + "</h1>";
    return salarioLiquido * 13;
}

/*
2 - Criar uma função que receba dois numeros e retorne o menor valor;
*/
function menorValor() {
    n1 = document.getElementById('n1menor').value;
    n2 = document.getElementById('n2menor').value;
    res = document.getElementById('resultadoMenor');

    if (parseInt(n1) < parseInt(n2)) {
        res.innerHTML = "<h1> O menor valor é : " + n1 + "</h1>";
        return n1;
    } else {
        res.innerHTML = "<h1> O menor valor é : " + n2 + "</h1>";
        return n2;
    }
}

/*
3 - Criar uma função que receba dois numeros e retorne o maior valor; */

function maiorValor() {
    n1 = document.getElementById('n1').value;
    n2 = document.getElementById('n2').value;
    res = document.getElementById('resultadoMaior');

    if (parseInt(n1) > parseInt(n2)) {
        res.innerHTML = "<h1> O maior valor é : " + n1 + "</h1>";
        return n1;
    } else {
        res.innerHTML = "<h1> O maior valor é : " + n2 + "</h1>";
        return n2;
    }

}

function maiorValorIfTernario(n1, n2) {
    return (n1 > n2) ? n1 : n2;
}

/*
4 - Criar uma função que recebe um valor inteiro e verifica se é positivo ou negativo */
function positivoNegativo() {
    //valor a receber do campo do form (positivo ou negativo)
    n1 = document.getElementById('n1p').value;
    //onde vou exibir o resultado
    console.log(n1);
    result = document.getElementById('resultadoPN');
    if (n1 > 0) {
        result.innerHTML = "<h1 style='color:green'> Positivo </h1>";
        return 'Positivo';
    } else if (n1 == 0) {
        result.innerHTML = "<h1> Neutro </h1>";
        return 'Neutro';
    } else {
        result.innerHTML = "<h1 style='color:red'> Negativo </h1>";
        return 'Negativo';
    }
}
/*
5 - Criar uma função que recebe altura e sexo de uma pessoa e retorna o seu peso ideal. Calcular usando as regras abaixo:
Homens: 72.7 x altura - 58      
Mulheres: 62.1 x altura - 44.7
*/

function pesoIdeal() {
    altura = document.getElementById('altura').value;
    sexo = document.querySelectorAll('input[name="sexo"]:checked')[0].value;

    result = document.getElementById('resultadoPIdeal');
    var calculo;
    if (sexo == 'M') {
        calculo = 72.7 * altura - 58;
    } else if (sexo == 'F') {
        calculo = 62.1 * altura - 44.7;
    } else {
        console.log('Informe valores corretos [M] - Masculino e [F] - Feminino')
    }

    result.innerHTML = "<h1>" + calculo.toFixed(2) + "kg</h1>";
    return calculo.toFixed(2);
}

    /*
    Document
    Object
    Model

    Manipular elementos na página html através do JS
    */