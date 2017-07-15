'use strict';
const registrarTelefono = (update)=>{
	const divContenido = $("<div class='container'></div>");
	const divMensaje =$("<div class='text-center mb-2rem pb-2rem'></div>");
	const img = $("<img class='mt-5rem' src='img/icons/phone.png' alt='phone'>");
	const h2 = $("<h2 class='mv-14px'>Para comenzar validemos tu número</h2>");
	const p = $("<p class='fs-14'>Recibiras un SMS con un código de validación</p>");
	const form = $("<form></form>");
	const divInput = $("<div class='border-botton'></div>");
	const icon = $("<i class='icon phoneandnumber'></i>");
	const inputTelefono = $("<input id='phone' type='text'>");
	const check = $("<input type='checkbox'>");
	const span = $("<span>Acepto los <a href='#'>Terminos y condiciones</a></span>");
	const divButton = $("<div class='flex-center mt-5rem'></div>");
	const button = $("<button>Continuar</button>");
	const mensajeError = $("<p class='error text-center'></p>");
	mensajeError.hide();
	button.attr('disabled', true);
	
	let validatePhone = false,
		validateTerms= false;

	const activarBoton = ()=>{
		if(validatePhone && validateTerms){
			button.attr('disabled', false);
		}else{
			button.attr('disabled', true);
		}
	}

	inputTelefono.on({
		keypress: solo9Digitos,
		keyup: (e)=>{
			if($(e.target).val().length ==9){
				validatePhone = true;
				activarBoton();
			}else{
				validatePhone = false;
				activarBoton();
			}
		}
	});
	
	check.on("click",(e)=> {
		if(check.prop("checked")){
			validateTerms= true;
			activarBoton();
		}else{
			validateTerms = false;
			activarBoton();
		}
	});	


	form.on("submit",(e)=>{
		e.preventDefault();
		
		registrarCelular((error,data)=>{
			if(error){
				console.log(error.message);
				mensajeError.show();
				mensajeError.text(error.message);
			}else{
				mensajeError.text("");
				console.log(data);
				state.code = data.code;
				state.telefono = data.phone;
				state.page = validarCode;
				update();
			}					

		},
		{
			phone:inputTelefono.val(),
			terms:true
		});
	});

	divMensaje.append(img);
	divMensaje.append(h2);
	divMensaje.append(p);

	divInput.append(icon);
	divInput.append(inputTelefono);
	divButton.append(button);

	form.append(divInput);
	form.append(check);
	form.append(span);
	form.append(divButton);
	form.append(mensajeError);

	divContenido.append(divMensaje);
	divContenido.append(form);
	
	return divContenido;
};
