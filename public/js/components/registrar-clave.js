'use strict';
const registrarClave = (update)=>{
	let lastDigitos = state.tarjeta.slice(state.tarjeta.length-5);
	const registrarClave = $("<div class='container'></div>");
	const divMensaje = $("<div class='text-center mb-2rem pb-2rem'></div>");
	const img = $("<img class='mt-5rem' src='img/icons/bcp-logo.png' alt='tarjeta'/>");
	const h2 = $("<h2 class='mv-14px'>Ingresa la clave de tu tarjeta</h2>");
	const p = $("<p class='fs-14'>Tarjeta <strong>*****<span id='dig-tarjeta'>"+lastDigitos+"</span></strong></p>");
	const form = $("<form></form>");
	const divInputClave = $("<div class='border-botton mv-14px'></div>");
	const iconClave = $("<i class='icon lock'></i>");
	const inputClave = $("<input id='clave' type='password'>");
	const divButton = $("<div class='flex-center mt-5rem'></div>");
	const btnRegistrarTarjeta = $("<button>Registrar</button>");
	btnRegistrarTarjeta.attr("disabled", true);

	form.on("keyup",(e)=>{
		if(validarInput($(e.target))){
			btnRegistrarTarjeta.attr("disabled", false);
		}else{
			btnRegistrarTarjeta.attr("disabled", true);
		}
	});

	form.on("submit", (e)=>{
		e.preventDefault();

		let objTarjeta ={	phone: state.telefono,
							cardNumber: state.tarjeta,
							cardMonth: state.mes,
							cardYear: state.anio,
							cardPassword: inputClave.val()
						};

		registrarTarjeta((error,data)=>{
			if(error){
				console.log(error.message);	
			}else{
				console.log(data);
				state.page = pantallaFinal;
				update();				
			} 				
				
		}, objTarjeta);
	});

	divInputClave.append(iconClave);
	divInputClave.append(inputClave);
	divButton.append(btnRegistrarTarjeta);

	form.append(divInputClave);
	form.append(divButton);

	divMensaje.append(img);
	divMensaje.append(h2);
	divMensaje.append(p);

	registrarClave.append(divMensaje);
	registrarClave.append(form);

	return registrarClave;
};