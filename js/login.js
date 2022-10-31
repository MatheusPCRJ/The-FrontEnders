// Funfção do Bootstrap
$(function(){
    $('.button-checkbox').each(function(){
		var $widget = $(this),
			$button = $widget.find('button'),
			$checkbox = $widget.find('input:checkbox'),
			color = $button.data('color'),
			settings = {
					on: {
						icon: 'glyphicon glyphicon-check'
					},
					off: {
						icon: 'glyphicon glyphicon-unchecked'
					}
			};

		$button.on('click', function () {
			$checkbox.prop('checked', !$checkbox.is(':checked'));
			$checkbox.triggerHandler('change');
			updateDisplay();
		});

		$checkbox.on('change', function () {
			updateDisplay();
		});

		function updateDisplay() {
			var isChecked = $checkbox.is(':checked');
			// Set the button's state
			$button.data('state', (isChecked) ? "on" : "off");

			// Set the button's icon
			$button.find('.state-icon')
				.removeClass()
				.addClass('state-icon ' + settings[$button.data('state')].icon);

			// Update the button's color
			if (isChecked) {
				$button
					.removeClass('btn-default')
					.addClass('btn-' + color + ' active');
			}
			else
			{
				$button
					.removeClass('btn-' + color + ' active')
					.addClass('btn-default');
			}
		}
		function init() {
			updateDisplay();
			// Inject the icon if applicable
			if ($button.find('.state-icon').length == 0) {
				$button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
			}
		}
		init();
	});
});
// FinalFunfção do Bootstrap



// Função para o login
document.querySelector('#botaologin').onclick = function(){


	let email = document.querySelector('#email');
	let senha = document.querySelector('#password');
	let resposta = document.querySelector('#loginInvalido');

	let lista = []

	let contas = {
		email: '',
		senha: '',
	}
	
	lista = JSON.parse(localStorage.getItem('lista'));
	
	lista.forEach((item) => {
		if(email.value == item.getEmail && senha.value == item.getSenha){
			contas = {
				email: item.getEmail,
				senha: item.getSenha,
			}
		}else{
			resposta.innerHTML=('Preencha todos os campos')
		}
	})

	
	if(email.value == "" || senha.value == ""){

		resposta.innerHTML=('Preencha todos os campos')

		document.querySelector('#formularioMain').addEventListener("submit", function(event){
			event.preventDefault();
		});

	}else if(email.value == contas.email && senha.value == contas.senha){

		document.querySelector('#formularioMain').addEventListener("submit", function(event){
			event.preventDefault();
		});

		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Login Realizado com Sucesso',
			showConfirmButton: false,
			timer: 3500,
		})
		resposta.innerHTML=('')

	}else{
		resposta.innerHTML=('Login e Senha incorreta, click em <b>"Esqueceu sua Senha?"</b>')
		
		document.querySelector('#formularioMain').addEventListener("submit", function(event){
			event.preventDefault();
		});
	}
}




// Função para mostrar a senha na caixinha

let pegaSenha = document.querySelector('#password');
function mostraSenha(){
	if(pegaSenha.type=="password"){
		pegaSenha.type="text";
	}
	else{
		pegaSenha.type="password";
	}
}