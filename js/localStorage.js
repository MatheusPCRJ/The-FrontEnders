let email = document.querySelector('#email');
let senha = document.querySelector('#senha');


document.querySelector(".btn-primary").addEventListener('click', () => {

    if(email.value == "" && senha.value == ""){
        
    }else{
        let lista = JSON.parse(localStorage.getItem('lista') || '[]');
        lista.push(
            {
                getEmail: email.value,
                getSenha: senha.value,
            }
        )
    
        // Função para criar um novo registro no LocalStorage
        lista = localStorage.setItem('lista', JSON.stringify(lista));
    }
});




