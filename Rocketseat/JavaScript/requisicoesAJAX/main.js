//ajax é uma requisição assincrona que a gente realiza a algum backend
//logo, no javascript usamos o ajax para requisitar informações de nosso servidor
//sem precisar atualizar a página

//primeiro começamos definindo uma variavel com a classe q nos dá acesso ao ajax
/*var xhr = new XMLHttpRequest();

//agora colocamos as informações do servidor
//aqui estou utilizando a api.github.com do meu perfil

xhr.open('GET','https://api.github.com/users/davidmarccos');
xhr.send(null);

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}*/

//MELHORANDO AINDA MAIS O CODIGO ACIMA >>>>>>

//------------------------
/*
var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','https://api.github.com/users/davidmarccos');
        xhr.send(null);
        
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                //sei que quando a requisição eh de sucesso, é quando o status é igual a 200 lá api.github
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }
            }
        }

    });
}

minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });
;
//LOGO promisses é classe que deixa a gente trabalhar com a estrutura .then e .catch
//que deixa a gente trabalhar com codigo assincrono dentro do nosso js
*/

//MELHORANDO AINDA MAIS O CÓDIGO ACIMA >>>>>>

//-----------------------------
//ABAIXO ESTAMOS USANDO A BIBLIOTECA AXIOS PARA REALIZAR REQUISIÇÕES ASSINCRONAS NO MEU JS

//acima, nós utilizamos XMLHttpRequest() para buscar informação do servidor
//agora vamos substituir pela axios]

//instale NO ARQUIVO .html, caso não tenha,
//https://github.com/axios/axios
//cole isso 
//< script  src = " https://unpkg.com/axios/dist/axios.min.js " > </ script >


axios.get('https://api.github.com/users/davidmarccos')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });
;
//logo, o axios nos ajuda a retornar os valores de forma mais fácil
//veja que a sintaxe pra fazer requisições api ficou muito mais fácil
//agora vc só precisa informar o método que queira usar
//axios.get ou axios.put ou axios.post axios.delete
//e informar a url logo depois