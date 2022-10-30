$(function () {
	$('.button-checkbox').each(function () {
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
			else {
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

let email = document.querySelector('#email');
let resposta = document.querySelector('#loginInvalido');

document.querySelector('.send').onclick = function () {
	if (email.value == "teste@gmail.com") {
		document.querySelector('#formularioMain').addEventListener("submit", function (event) {
			event.preventDefault();
		});
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Solicitação enviada com sucesso. Cheque sua caixa de mensagens.',
			showConfirmButton: false,
			timer: 3500,
		});

	} else{
		resposta.innerHTML = ('Digite seu email para recuperação')
		document.querySelector('#formularioMain').addEventListener("submit", function (event) {
			event.preventDefault();
		});
	}
}