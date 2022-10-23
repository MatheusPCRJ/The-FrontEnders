'use strict'

//código para limpeza de formulário ao digitar novamente o CEP
const limparFormulario = (endereco) =>{
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

//Cada getElementById corresponde ao ID que vão ficar as informações referentes ao endereço

const preencherFormulario = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

//código para que o cep apenas aceite os 8 números e ignore letras
const eNumero = (numero) => /^[0-9]$/.test(numero);

const cepValido = (cep) => cep.lenght = 8 && eNumero(cep);

//código para limpar o formulário quando for digitar o CEP novamente
const pesquisarCep = async() => {
    limparFormulario();
//código para extrair os dados da API e mostrar os dados
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty('erro')){
        document.getElementById('endereco').value = 'CEP Não Encontrado' ;
    }else {
        preencherFormulario(endereco);
         }
    }else{
        document.getElementById('endereco').value = 'CEP Incorreto' ;
    }

} 

document.getElementById('cep')
        .addEventListener('focusout',pesquisarCep);