/*
criar eventos de click para os botões da tela, utilizando o onload
*/
window.onload = function(){
    let corBox1 = 'blue';
    let corBox2 = 'red';
    let corBox3 = 'green';

    document.getElementById('btnBox1').addEventListener('click',function(){
        //mudança da cor do background do box 1
        document.getElementById('box1').style.backgroundColor = '#CCC';
    });

    document.getElementById('btnBox2').addEventListener('click',function(){
        document.getElementById('box2').style.backgroundColor = '#000';
    });

    document.getElementById('btnBox3').addEventListener('click',function(){
        document.getElementById('box3').style.backgroundColor = '#999';
    });

    document.getElementById('reset').addEventListener('click',function(){
        document.getElementById('box1').style.backgroundColor = corBox1;
        document.getElementById('box2').style.backgroundColor = corBox2;
        document.getElementById('box3').style.backgroundColor = corBox3;
    });
    //Ocultar box's
    document.getElementById('ocultar').addEventListener('click',function(){
        //oculta a caixa
        document.getElementById('box1').style.display = 'none';
        document.getElementById('box2').style.display  = 'none';
        document.getElementById('box3').style.display = 'none';
    });
    //Mostrar box's
    document.getElementById('mostrar').addEventListener('click',function(){
        //mostra a caixa com o atributo CSS display:block
        document.getElementById('box1').style.display = 'block';
        document.getElementById('box2').style.display  = 'block';
        document.getElementById('box3').style.display = 'block';
    });
};