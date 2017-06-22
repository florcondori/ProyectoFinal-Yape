'use strict';
const mensajeFormFinal = ()=>{
	let lastDigitos = state.datosTarjeta.card.slice(state.datosTarjeta.card.length-5);
	const divMensaje = $("<div></div>");
	const img = $("<img src='img/icons/bcp-logo.png' alt='tarjeta'/>");
	const h2 = $("<h2>Ingresa la clave de tu tarjeta</h2>");
	const p = $("<p>Tarjeta <strong>*****<span id='dig-tarjeta'>"+lastDigitos+"</span></strong></p>");
	
	console.log(state.datosTarjeta.card);

	divMensaje.append(img);
	divMensaje.append(h2);
	divMensaje.append(p);

	return divMensaje;
};

const formFinal = (div)=>{
	const form = $("<form></form>");
	const divInputClave = $("<div class='border-botton mv-14px'></div>");
	const iconClave = $("<i class='icon lock'></i>");
	const inputClave = $("<input id='clave' type='password'>");
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
		console.log("llamar al Api");
		let objTarjeta ={	phone: state.usuario.phone,
							cardNumber: state.datosTarjeta.card,
							cardMonth: state.datosTarjeta.mes,
							cardYear: state.datosTarjeta.anio,
							cardPassword: inputClave.val()
						};

		registrarTarjeta((error,data)=>{
			if(error){
				console.log(error.message);	
			}else{
				console.log(data);
				state.completed = "completado";
				reRenderTarjeta(div);				
			} 				
				
		}, objTarjeta);
	});

	divInputClave.append(iconClave);
	divInputClave.append(inputClave);

	form.append(divInputClave);
	form.append(btnRegistrarTarjeta);

	return form;
};