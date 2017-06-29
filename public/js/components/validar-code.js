'use strict';
const validarCode = (update)=>{
	const div = $("<div class='container'></div>");
	const divMensaje = $("<div class='text-center mb-2rem pb-2rem'></div>");
	const img = $("<img class='mt-5rem' src='img/icons/message.png' alt='sms'/>");
	const p = $("<p class='fs-14'>Enviamos un SMS con el codigo de validacion al numero <strong>"+state.telefono+"</strong></p>");
	const h2 = $("<h2 class='mv-14px'>Ahora ingresa tu código</h2>");
	const divFormulario = $("<div></div>");
	const formValidarCode = $("<form></form>");
	const divInput = $("<div class='border-botton'></div>");
	const icon = $("<i class='icon lock'></i>");
	const input = $("<input type='text'>");
	const mensajecode = $("<p class='text-center fs-14'>Tu codigo es <span id='mensaje-code'>"+state.code+"</span></p>");
	const mensaje = $("<p class='text-center'>Reintentar en <i class='icon clock'></i><span id='temporizador'>21<span><p>");
	mensajecode.hide();

	input.focus(_=>{
		mensajecode.show();
	});
	const disminuirCronometro = ()=>{
	    if($("#temporizador").text() > 0) {	   
	        $("#temporizador").text(eval($("#temporizador").text())-1);
	    } else {
	    	refrescarCodigo((error, data)=>{
	    	if(error) console.log(error.message);
		    	state.code = data;
		    	console.log(data);
		    	$("#mensaje-code").text(state.code);

		    }, {phone:state.telefono});
	        $("#temporizador").text(21);
	    }  
	}

	formValidarCode.on("keyup", (e)=>{
		if(input.val() == state.code){
			console.log("saltar a CrearUsuario");
			clearInterval(cronometro);
			state.page = registrarUsuario;
			update();
		}
	});
	
  	//activar temporizador
   	var cronometro = setInterval(disminuirCronometro,1000);  
  			
	divMensaje.append(img);
	divMensaje.append(h2);
	divMensaje.append(p);

	divInput.append(icon);
	divInput.append(input);

	formValidarCode.append(mensajecode);
	formValidarCode.append(divInput);	
	formValidarCode.append(mensaje);
	divFormulario.append(formValidarCode);

	div.append(divMensaje);
	div.append(divFormulario);

	return div;
};

