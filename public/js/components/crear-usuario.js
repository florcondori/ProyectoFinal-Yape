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

const formularioCrearCuenta = (update)=>{
	const formCrearCuenta = $("<form></form>");
	const divInputNombre = $("<div class='border-botton mv-14px'></div>");
	const iconNombre = $("<i class='icon user'></i>");
	const inputNombre = $("<input id='nombre' type='text' placeholder='Nombre'>");
	const divInputEmail = $("<div class='border-botton mv-14px'></div>");
	const iconEmail = $("<i class='icon message'></i>");
	const inputEmail = $("<input id='email' type='text' placeholder='email@dominio.com.pe'>");
	const divInputPassword = $("<div class='border-botton mv-14px'></div>");
	const iconPasword = $("<i class='icon lock'></i>");
	const inputPasword = $("<input id='password' type='password'placeholder='Ingresa clave de 6 digitos'>");
	const mensaje = $("<p>Cuida esta clave como oro , es tu acceso a Yape.</p>");
	const btnCrearCuenta = $("<button>Crear Cuenta</button>");
	btnCrearCuenta.attr('disabled', true);
		
	inputNombre.on("keypress", soloLetras);

	formCrearCuenta.on("keyup", (e)=>{		
		if(validarInput(inputNombre) && validarInput(inputEmail) && validarInput(inputPasword)){
			btnCrearCuenta.attr('disabled', false);
		}else{
			btnCrearCuenta.attr('disabled', true);
		}
	});
	//click CREAR CUENTA
	formCrearCuenta.on("submit",(e)=>{update
		e.preventDefault();
		if (validarEmail(inputEmail.val())){
	    	divInputEmail.removeClass("border-red");
	    } else{
	     	divInputEmail.addClass("border-red");
	    }

	    if(inputPasword.val().length >= 6){
	    	divInputPassword.removeClass("border-red");
	    }else{
	      	divInputPassword.addClass("border-red");
	    }
	    //si email y el password son correctos
	    if(validarEmail(inputEmail.val()) && inputPasword.val().length >= 6){
	    	console.log("enviar Api");
	    	let objUsuario = {  phone: state.code.phone,
			    				name: inputNombre.val(),
			    				email: inputEmail.val(),
			    				password: inputPasword.val()
			    			 }

	    	crearUsuario((error, data)=>{
	    		if(error) console.log(error.message);

	    		state.usuario = data;
	    		update();

	    	}, objUsuario);

	    }else{
	    	console.log("llenar bien los datos");
	    }
	});

	divInputNombre.append(iconNombre);
	divInputNombre.append(inputNombre);
	divInputEmail.append(iconEmail);
	divInputEmail.append(inputEmail);
	divInputPassword.append(iconPasword);
	divInputPassword.append(inputPasword);

	formCrearCuenta.append(divInputNombre);
	formCrearCuenta.append(divInputEmail);
	formCrearCuenta.append(divInputPassword);
	formCrearCuenta.append(btnCrearCuenta);
	formCrearCuenta.append(mensaje);
	
	return formCrearCuenta;
};

const reRenderUsuario = (mensaje, contenedorForm, update)=>{
	mensaje.empty();
	contenedorForm.empty();

	mensaje.append(mensajeCrearCuenta);
	contenedorForm.append(formularioCrearCuenta(update));
};

const CrearUsuario = (update)=>{
	const div = $("<div></div>");
	const divMensaje = $("<div></div>");
	const img = $("<img src='img/icons/message.png' alt='sms'/>");
	const p = $("<p>Enviamos un SMS con el codigo de validacion al numero <strong>"+state.code.phone+"</strong></p>");
	const h2 = $("<h2>Ahora ingresa tu código</h2>");
	const divFormulario = $("<div></div>");
	const formValidarCode = $("<form></form>");
	const divInput = $("<div class='border-botton mv-14px'></div>");
	const icon = $("<i class='icon lock'></i>");
	const input = $("<input type='text'>");
	const error = $("<span class='error'></span>");
	const mensaje = $("<p>Reintentar en <i class='icon clock'></i><span id='temporizador'>21<span><p>");
	
	const disminuirCronometro = ()=>{
	    if($("#temporizador").text() > 0) {	   
	        $("#temporizador").text(eval($("#temporizador").text())-1);
	    } else {
	        $("#temporizador").text(21);
	    }  
	}

	formValidarCode.on("keyup", (e)=>{
		if(input.val() == state.code.code){
			console.log("saltar a CrearUsuario");
			clearInterval(cronometro);
			clearInterval(refreshCode);
			reRenderUsuario(divMensaje, divFormulario, update);
		}
	});
	
  	//activar temporizador
   	var cronometro = setInterval(disminuirCronometro,1000);  
  	//generar nuevo codigo
	var refreshCode = setInterval(function(){		  
	  
	    refrescarCodigo((error, data)=>{
	    	if(error) console.log(error.message);
	    	state.code.code = data;

	    }, {phone:state.code.phone});		

	},22000);

		
	divMensaje.append(img);
	divMensaje.append(h2);
	divMensaje.append(p);

	divInput.append(icon);
	divInput.append(input);
	formValidarCode.append(divInput);
	formValidarCode.append(error);
	formValidarCode.append(mensaje);
	divFormulario.append(formValidarCode);

	div.append(divMensaje);
	div.append(divFormulario);

	return div;
};

