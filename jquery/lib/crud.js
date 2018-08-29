$(function () {
    var tbContatos; //Criação da varivel global de armazenamento
    var edicao = false; //Verificador se o registro esta sendo editado
    
    function listarContatos() {
        //Consultar o localstorage para verificar a existencia da variavel tbContatos, se não for encontrada tbContatos = []
        //Verifica se o localStorage tem algum item chamado tbContatos, caso tenha ele armazena essa informação na variavel global tbContatos
        tbContatos = JSON.parse(localStorage.getItem('tbContatos'));
        //Caso não tenha registros no localStorage
        if (tbContatos === null) {
            tbContatos = []; //array vazio (base de dados vazia)
            $('#lista').hide(); //esconde a lista (tabela)
        }
        $('#lista table tbody').html(''); //Zera o html
        for (obj in tbContatos) {
            let linha = tbContatos[obj];
            //inicio da linha da table
            $('#lista table tbody').append('<tr>');

            $('#lista table tbody').append('<td>' + linha.nome + '</td>');
            $('#lista table tbody').append('<td>' + linha.fone1 + '</td>');
            $('#lista table tbody').append('<td>' + linha.fone2 + '</td>');
            $('#lista table tbody').append('<td>' + linha.email + '</td>');
            $('#lista table tbody').append('<td><button class="editar" alt="' + obj + '">Editar</button> <button class="deletar" alt="' + obj + '">Deletar</button></td>');

            $('#lista table tbody').append('</tr>');
            //fim da linha da table
        }
        //Adicionar eventos de click para os botões editar
        $('.editar').on('click', function () {
            //recebo a linha que estou trabalhando a edição atraves do atributo alt criado para cada botão
            let linha = $(this).attr('alt');
            let nome = tbContatos[linha].nome;
            let fone1 = tbContatos[linha].fone1;
            let fone2 = tbContatos[linha].fone2;
            let email = tbContatos[linha].email;
            //Atribui valores aos campos do formulário
            $('#nome').val(nome);
            $('#fone1').val(fone1);
            $('#fone2').val(fone2);
            $('#email').val(email);
            //mudando a chave edicao = false
            //para edicao = linha indicando que será feita uma edição
            edicao = linha;
        });
        //Adicionar eventos de click para os botões deletar
        $('.deletar').on('click', function () {
            if (confirm('Deseja realmente deletar esse contato?')) {
                let linha = $(this).attr('alt');
                //remoção de item do array tbContatos
                //função splice(indicedoarray, remover 1 item do array);
                tbContatos.splice(linha,1);
                //atualizar o localStorage com a remoção do item do array
                localStorage.setItem('tbContatos', JSON.stringify(tbContatos));
                //mostrar a mensagem
                alert('Registro Excluído com sucesso!!!');
                //listar os contatos novamente
                listarContatos();
            }
        });
    };
    
    //função iniciada para listar os contatos ao iniciar a página   
    listarContatos();

    function cadastrarContatos() {
        //objeto de cadastro contendo os 4 campos
        let cadastro = {
            nome: $('#nome').val(),
            fone1: $('#fone1').val(),
            fone2: $('#fone2').val(),
            email: $('#email').val()
        };
        //Pegar o objeto de cadastro 
        //Inserir no array tbContatos
        tbContatos.push(cadastro);
        //inserindo a informação da tbContatos no localStorage
        localStorage.setItem('tbContatos',
            JSON.stringify(tbContatos));
        //quando inserir um novo cadastro listar (atualizar)
        listarContatos();
        //Limpar os campos nome, fone1, fone2, email
        $('#nome, #fone1, #fone2, #email').val('');
        //mostrar mensagem alert
        alert('Contato incluído com sucesso!');
        $('#lista').show();
    };

    function editarContatos(linha) {
        let atualizacao = {
            nome: $('#nome').val(),
            fone1: $('#fone1').val(),
            fone2: $('#fone2').val(),
            email: $('#email').val()
        };
        //Editando a linha de cadastro 
        //informo a linha do array que vou atualizar os dados
        tbContatos[linha] = atualizacao;
        //Atualizar o localStorage
        localStorage.setItem('tbContatos',
            JSON.stringify(tbContatos));
        //mostrar mensagem     
        alert('Editado com sucesso!');
        //mudar a variavel edicao para false (status inicial)
        edicao = false;
        //listar os contatos
        listarContatos();
        //limpar os dados do formulário
        $('#nome, #fone1, #fone2, #email').val('');
    };

    //ouvindo o evento de envio (submit) do formulário
    $('#formCadastro').submit(function () {
        //colocar para o formulário não ser submetido (recarregar a página)
        event.preventDefault();
        //verifico se a ação será um cadastro ou uma atualização (edição)
        if (edicao === false) {
            //chamar a função cadastrarContatos()
            cadastrarContatos();
        } else {
            //chamar a função editarContatos(edicao)
            editarContatos(edicao); //edicao contem o nmero da linha
        }
    });

});