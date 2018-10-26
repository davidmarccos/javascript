
//referenciando os elementos da minha Dom
var listElemento = document.querySelector('#app ul');
var inputElemento = document.querySelector('#app input');
var buttonElemento = document.querySelector('#app button');

//criando um array
//sem localstorage nem json
/*var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar site do david'
];*/

//ESSE || [] serve para caso não exista nenhum dado no meu json, ele imprima um array vazio
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

/*SE FOSSE UM ARRAY MAIS COMPLETO, EU FARIA UM ARRAY DE OBJETOS
var todos = [
    { text: 'Fazer café', propriedade: 1},
    'Estudar Javascript',
    'Acessar site do david',
];
*/

//RENDERIZANDO OS TODOS EM TELA

function renderTodos(){
    //uso isso pq toda vez que for atualizar, ele apague a lista antiga e ponha a nova
    listElemento.innerHTML = '';

    //for especial para array
    // todo é a variavel de retorno
    for (todo of todos){
        //console.log(todo); iria retornar tds os todos que temos
        
        //criando elementos
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo); //uso o todo pq ela contem o texto de cada todo

        var linkElemento = document.createElement('a');
        linkElemento.setAttribute('href', '#');
        var linkTexto = document.createTextNode(' Excluir');

        var pos = todos.indexOf(todo);
        linkElemento.setAttribute('onclick','deletetodos('+ pos +')');

        //adicionando dentro
        linkElemento.appendChild(linkTexto);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElemento);
        listElemento.appendChild(todoElement);
    }
}

function adicionar(){
    var todoText = inputElemento.value;
    
    if(todoText == ''){
        alert("Elemento vazio. digite algo!");
    }else{
        //usando a função push para adicionar um novo item no final do array todos
        todos.push(todoText);
    }
    //o que tiver escrito na caixa de texto no input eu apago
    inputElemento.value = '';

    //por fim, chamo rendertodos() para atualizar a lista na pagina
    renderTodos();
    salvarNoStorage();
}

function deletetodos(pos){
    //usamos o metodo splice que remover uma determinada quantidade de posições do array
    todos.splice(pos, 1);
    renderTodos();
    salvarNoStorage();
}

function salvarNoStorage(){
    //json vai transformar o objeto todos em string
    //localstorage so trabalha com strings
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

//chamando a função para executar automaticamente
renderTodos();

//a funcao adicionar, sera chamada quando eu apertar meu botão adicionar
buttonElemento.onclick = adicionar;