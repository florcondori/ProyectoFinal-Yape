'use strict';
const mensajeCrearCuenta = ()=>{
	const div = $("<div></div>");
	const img = $("<img src='img/icons/lockone.png' alt='sms'/>");
	const h2 = $("<h2>Crea tu usuario Yape</h2>");
	const p = $("<p>Ingresa un nombre, email y clave de usuario</p>");
	
	div.append(img);
	div.append(h2);
	div.append(p);

	return div;
};

const formularioCrearCuenta = ()=>{
	const formCrearCuenta = $("<form></form>");
	const divInputNombre = $("<div class='border-botton mv-14px'></div>");
	const iconNombre = $("<i class='icon user'></i>");
	const inputNombre = $("<input id='nombre' type='text'>");
	const divInputEmail = $("<div class='border-botton mv-14px'></div>");
	const iconEmail = $("<i class='icon message'></i>");
	const inputEmail = $("<input id='email' type='text'>");
	const errorEmail = $("<span class='error'>");
	const divInputCode = $("<div class='border-botton mv-14px'></div>");
	const iconCode = $("<i class='icon lock'></i>");
	const inputCode = $("<input id='code' type='text'>");
	const errorCode = $("<span class='error'>");
	const mensaje = $("<p>Cuida esta clave como oro , es tu acceso a Yape.</p>");
	const btnCrearCuenta = $("<button>Crear Cuenta</button>");
	btnCrearCuenta.attr('disabled', true);
	let cont = 0;
	const validarInput = (input)=>{
		if(input.val() !=null && input.val()!= undefined && input.val().trim() != ""){
			return true;
		}else{
			return false;
		}
	};

	formCrearCuenta.on("keyup", (e)=>{		
		if(validarInput(inputNombre) && validarInput(inputEmail) && validarInput(inputCode)){
			btnCrearCuenta.attr('disabled', false);
		}else{
			btnCrearCuenta.attr('disabled', true);
		}
	});

	formCrearCuenta.on("submit",(e)=>{
		e.preventDefault();
		if (/([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(inputEmail.val())) {
	     errorEmail.text("bien");
	     cont++;
	    } else {
	      errorEmail.text("mal email");
	    }

	    if(inputCode.val() == state.data.code){
	    	errorCode.text("bien");
	    	cont++;
	    }else{
	      	errorCode.text("mal codigo");
	    }
	      	console.log(cont);
	    if(cont ==2){
	    	console.log("enviar Api");
	    }else{
	    	console.log("modificar errores");
	    }
	});

	divInputNombre.append(iconNombre);
	divInputNombre.append(inputNombre);
	divInputEmail.append(iconEmail);
	divInputEmail.append(inputEmail);
	divInputCode.append(iconCode);
	divInputCode.append(inputCode);

	formCrearCuenta.append(divInputNombre);
	formCrearCuenta.append(divInputEmail);
	formCrearCuenta.append(errorEmail);
	formCrearCuenta.append(divInputCode);
	formCrearCuenta.append(errorCode);
	formCrearCuenta.append(btnCrearCuenta);
	
	return formCrearCuenta;
};

const reRenderUsuario = (mensaje, contenedorForm)=>{
	mensaje.empty();
	contenedorForm.empty();

	mensaje.append(mensajeCrearCuenta);
	contenedorForm.append(formularioCrearCuenta);
};

const CrearUsuario = ()=>{
	const div = $("<div></div>");
	const divMensaje = $("<div></div>");
	const img = $("<img src='img/icons/message.png' alt='sms'/>");
	const p = $("<p>Enviamos un SMS con el codigo de validacion al numero <strong>"+state.data.phone+"</strong></p>");
	const h2 = $("<h2>Ahora ingresa tu código</h2>");
	const divFormulario = $("<div></div>");
	const form = $("<form></form>");
	const divInput = $("<div class='border-botton mv-14px'></div>");
	const icon = $("<i class='icon lock'></i>");
	const input = $("<input type='text'>");
	const mensaje = $("<p>Reintentar en <i class='icon clock'></i><span id='contador'><span><p>");

	input.on("keyup", (e)=>{
		console.log(input.val());
		if(input.val().trim() == state.data.code){
			console.log("saltar a la otra pagina");
			reRenderUsuario(divMensaje, divFormulario);
		}
	});

	divMensaje.append(img);
	divMensaje.append(h2);
	divMensaje.append(p);

	divInput.append(icon);
	divInput.append(input);
	form.append(divInput);
	form.append(mensaje);
	divFormulario.append(form);

	div.append(divMensaje);
	div.append(divFormulario);

	return div;
};