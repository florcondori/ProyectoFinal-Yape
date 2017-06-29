'use strict';
const registrarUsuario = (update)=>{
	const registrarUsuario = $("<div class='container'></div>");
	const div = $("<div class='text-center'></div>");
	const img = $("<img class='mt-5rem' src='img/icons/lockone.png' alt='sms'/>");
	const h2 = $("<h2 class='mv-14px'>Crea tu usuario Yape</h2>");
	const p = $("<p class='fs-14'>Ingresa un nombre, email y clave de usuario</p>");
	const formCrearCuenta = $("<form></form>");
	const divInputNombre = $("<div class='border-botton'></div>");
	const iconNombre = $("<i class='icon user'></i>");
	const inputNombre = $("<input id='nombre' type='text' placeholder='Nombre'>");
	const divInputEmail = $("<div class='border-botton'></div>");
	const iconEmail = $("<i class='icon message'></i>");
	const inputEmail = $("<input id='email' type='text' placeholder='email@dominio.com.pe'>");
	const divInputPassword = $("<div class='border-botton'></div>");
	const iconPasword = $("<i class='icon lock'></i>");
	const inputPasword = $("<input id='password' type='password'placeholder='Ingresa clave de 6 digitos'>");
	const mensaje = $("<p class='text-center fs-14'>Cuida esta clave como oro , es tu acceso a Yape.</p>");
	const divButton = $("<div class='flex-center mt-3rem'></div>");
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
	    	let objUsuario = {  phone: state.telefono,
			    				name: inputNombre.val(),
			    				email: inputEmail.val(),
			    				password: inputPasword.val()
			    			 }

	    	crearUsuario((error, data)=>{
	    		if(error) console.log(error.message);

	    		state.nombre = data.name;
	    		state.email = data.email;
	    		state.page = successPage;
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
	divButton.append(btnCrearCuenta);

	formCrearCuenta.append(divInputNombre);
	formCrearCuenta.append(divInputEmail);
	formCrearCuenta.append(divInputPassword);
	formCrearCuenta.append(mensaje);
	formCrearCuenta.append(divButton);
	

	div.append(img);
	div.append(h2);
	div.append(p);
	
	registrarUsuario.append(div);
	registrarUsuario.append(formCrearCuenta);

	return registrarUsuario;
};



