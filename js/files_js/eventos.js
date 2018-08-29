//igual ao atributo onload="" adicionado <body> do html
window.onload = function(){
    //variavel para armazenar a janela aberta
    let openWindow;
    document.getElementById('acesso').addEventListener('click',function(){
        //vai abrir uma nova aba do navegador e armazenar na variavel
        openWindow = window.open('https://google.com');
    });
    document.getElementById('fechar').addEventListener('click',function(){
        //fecha a janela aberta no navegador
        openWindow.close();
    });
    document.getElementById('link').addEventListener('click',function(){
        //redireciona a janela para um endereço
        window.location.href = 'https://medium.com';
    });
    document.getElementById('avancar').addEventListener('click',function(){
        //redireciona a janela para um historico a frente
        history.forward();
    });
    document.getElementById('voltar').addEventListener('click',function(){
        //redireciona a janela para um historico trás
        history.back();
    });
};