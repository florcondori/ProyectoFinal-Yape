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
	const inputPasword = $("<input id='password' type='password' placeholder='Ingresa clave de 6 digitos'>");
	const mensaje = $("<p class='text-center fs-14'>Cuida esta clave como oro , es tu acceso a Yape.</p>");
	const divButton = $("<div class='flex-center mt-3rem'></div>");
	const btnCrearCuenta = $("<button>Crear Cuenta</button>");
	btnCrearCuenta.attr('disabled', true);
	
	let validateNombre,
		validateEmail,
		validatePassword;

	const activeBoton = ()=>{

		if(validateNombre && validateEmail && validatePassword){
			btnCrearCuenta.attr('disabled', false);
		}else{
			btnCrearCuenta.attr('disabled', true);
		}
	}

	inputNombre.on({
		keypress: soloLetras,
		keyup: (e)=>{
			if($(e.target).val().length > 1 ){
				$(e.target).parent().removeClass("border-red");
				validateNombre = true;
				activeBoton();
			}else{
				$(e.target).parent().addClass("border-red");
				validateNombre = false;
				activeBoton();
			}
		}		
	});

	inputEmail.on("keyup", (e)=>{
		if(/([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test($(e.target).val())){
			$(e.target).parent().removeClass("border-red");
			validateEmail = true;
			activeBoton();
		}else{
			$(e.target).parent().addClass("border-red");
			validateEmail = false;
			activeBoton();
		}
	});

	inputPasword.on("keyup", (e)=>{
		if($(e.target).val().length >= 6){
			$(e.target).parent().removeClass("border-red");
			validatePassword = true;
			activeBoton();
		}else{
			$(e.target).parent().addClass("border-red");
			validatePassword = false;
			activeBoton();
		}
	});

	//click CREAR CUENTA
	formCrearCuenta.on("submit",(e)=>{update
		e.preventDefault();

	    //si email y el password son correctos
	    if(validateNombre && validateEmail && validatePassword){
	    
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



