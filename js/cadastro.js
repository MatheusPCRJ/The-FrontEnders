'use strict'

//Cada getElementById corresponde ao ID que vai ficar as informações referentes ao endereço

const preencherFormulario = (endereco) =>{
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const pesquisarCep = async() => {
    const cep = document.getElementById('cep'.value);
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty('erro')){
        document.getElementById('endereco').value = 'CEP Não Encontrado'
    }else{
        preencherFormulario(endereco);
    }
    
}

document.getElementById('cep')
        .addEventListener('focusout',pesquisarCep);