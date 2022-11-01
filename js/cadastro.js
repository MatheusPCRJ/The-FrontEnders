let avisoDePreenchimento = document.querySelector(".my-1010");

document.querySelector(".btn-primary").addEventListener('click', () => {
    let marcador = false;
    let campoEmBranco = document.querySelectorAll(".form-control");
    for(let i = 0; i < campoEmBranco.length; i++){

    if(campoEmBranco[i].value == ""){
        let x = campoEmBranco[i].name;
        i = 13;
        avisoDePreenchimento.innerHTML=(`Por favor preencha ${x}`);
        marcador = false;
        
    }else{
        document.querySelector('.needs-validation').addEventListener("submit", function(event){
        event.preventDefault();
        });

       marcador = true;

       

    }
    }

    if(marcador == true){

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Dados cadastrados',
            showConfirmButton: false,
            timer: 2000
        })
        // função para redirecionar para página de login depois que cair no falso (else)
            setTimeout(() => {
                window.location.href = 'login.html'
            }, 3000)
    }

})




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

//código paraidentificar apenas números e validar CEP

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

const pesquisarCep = async() => {
    limparFormulario();

//código para extrair os dados da API e mostrar os dados
    const cep = document.getElementById('cep').value.replace("-","");
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado!';
        }else {
            preencherFormulario(endereco);
        }
    }else{
        document.getElementById('endereco').value = 'CEP incorreto!';
    }
     
}
//código para extrair API quando usuário retirar mouse do campo
document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);

