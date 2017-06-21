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
	const inputEmail = $("<input id='email' type='text'>");
	const errorEmail = $("<span class='error'>");
	const divInputPassword = $("<div class='border-botton mv-14px'></div>");
	const iconPasword = $("<i class='icon lock'></i>");
	const inputPasword = $("<input id='password' type='text'>");
	const errorPasword = $("<span class='error'>");
	const mensaje = $("<p>Cuida esta clave como oro , es tu acceso a Yape.</p>");
	const btnCrearCuenta = $("<button>Crear Cuenta</button>");
	btnCrearCuenta.attr('disabled', true);
	let cont = 0;
	
	inputNombre.on("keypress", soloLetras);

	formCrearCuenta.on("keyup", (e)=>{		
		if(validarInput(inputNombre) && validarInput(inputEmail) && validarInput(inputPasword)){
			btnCrearCuenta.attr('disabled', false);
		}else{
			btnCrearCuenta.attr('disabled', true);
		}
	});
	//click CREAR CUENTA
	formCrearCuenta.on("submit",(e)=>{
		e.preventDefault();
		if (validarEmail(inputEmail.val())){
	    	errorEmail.text("");
	     	cont++;
	    } else {
	     	errorEmail.text("formato: email@dominio.com");
	    }

	    if(inputPasword.val().length >= 6){
	    	errorPasword.text("");
	    	cont++;
	    }else{
	      	errorPasword.text("debe contener 6 digitos");
	    }
	    //si email y el password son correctos
	    console.log(cont);
	    if(cont == 2){
	    	console.log("enviar Api");
	    	let objUsuario = {  phone: state.code.phone,
			    				name: inputNombre.val(),
			    				email: inputEmail.val(),
			    				password: inputPasword.val()
			    			 }

	    	$.post("/api/createUser", objUsuario,(json)=>{
	    		state.usuario = json.data;
	    		console.log(state.usuario);

	    		update();
	    	});

	    }else{
	    	console.log("modificar errores");
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
	formCrearCuenta.append(errorEmail);
	formCrearCuenta.append(divInputPassword);
	formCrearCuenta.append(errorPasword);
	formCrearCuenta.append(btnCrearCuenta);
	
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
	

	const validarCode = (input)=>{
		if(input.val() == state.code.code){
			return true;
		}else{
			return false;
		}		
	};

	const disminuirCronometro = ()=>{
	    if($("#temporizador").text() > 0) {	   
	        $("#temporizador").text($("#temporizador").text()-1);
	    } else {
	        clearInterval(cronometro);
	    }  
	}
  	//activar temporizador
   	var cronometro = setInterval(disminuirCronometro,1000);  
  	//generar nuevo codigo
	setTimeout(function(){
		if(!validarCode(input)){
		   /* $.post("/api/resendCode",{phone:state.code.phone},(json)=>{
		    	console.log(json);
		    	state.code.code = json.data;
		    	
		    });*/
		    refrescarCodigo((error, data)=>{
		    	if(error) console.log(error.message);
		    	state.code.code = data;

		    }, {phone:state.code.phone});
		}

	},21000);

	formValidarCode.on("keyup", (e)=>{
		console.log(input.val());
		if(validarCode(input)){
			console.log("saltar a CrearUsuario");
			reRenderUsuario(divMensaje, divFormulario, update);
		}
	});


		
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

