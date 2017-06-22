'use strict';
const mensajeRegistrarTarjeta = ()=>{
	const div = $("<div></div>");
	const img = $("<img src='img/icons/bcp-logo.png' alt='tarjeta'/>");
	const h2 = $("<h2>Registrar tu tarjeta débito BCP</h2>");
	const p = $("<p>Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles</p>");
	
	div.append(img);
	div.append(h2);
	div.append(p);

	return div;
};

const formRegistrarTarjeta = ()=>{
	const formRegistrarTarjeta = $("<form></form>");
	const divInputTarjeta = $("<div class='border-botton mv-14px'></div>");
	const iconTarjeta = $("<i class='icon card'></i>");
	const inputTarjeta = $("<input id='tarjeta' type='text'>");
	const divInputFecha = $("<div></div>");
	const label = $("<label>Fecha de vencimiento</label>");
	const inputMes = $("<input class='width-35 border-botton' placeholder='Mes' type='text'/>");
	const span = $("<span>/<span>");
	const inputAnio = $("<input class='width-35 border-botton' placeholder='Año' type='text'/>");
	const btnContinuar = $("<button>continuar</button>");
	btnContinuar.attr('disabled', true);

	let inputValido = 0;
	inputTarjeta.on("keypress", solo16Digitos);

	inputMes.on("keypress", solo2Digitos);

	inputAnio.on("keypress", solo2Digitos);

	formRegistrarTarjeta.on("keyup", (e)=>{
		if(validarInput(inputTarjeta) && validarInput(inputMes) && validarInput(inputAnio)){
			btnContinuar.attr('disabled', false);
		}else{
			btnContinuar.attr('disabled', true);
		}
	});

	formRegistrarTarjeta.on("submit", (e)=>{
		e.preventDefault();

		if(inputTarjeta.val().length == 16){
			divInputTarjeta.removeClass("border-red");
			inputValido++;
		}else{
			divInputTarjeta.addClass("border-red");	
		}

		if(inputMes.val()>= 1 && inputMes.val()<=12){
			inputMes.removeClass("border-red");
			inputValido++;
		}else{
			inputMes.addClass("border-red");	
		}

		if(inputAnio.val()>= 17 && inputAnio.val()<=24){
			inputAnio.removeClass("border-red");
			inputValido++;
		}else{
			inputAnio.addClass("border-red");	
		}

		if(inputValido == 3){
			console.log("guardando datos");
			state.datosTarjeta = {	card: inputTarjeta.val() ,
									mes: inputMes.val() ,
									anio: inputAnio.val()};

			reRenderTarjeta(div);
		}else{
			console.log("llenar bien los datos");
		}
		
	});

	divInputTarjeta.append(iconTarjeta);
	divInputTarjeta.append(inputTarjeta);
	divInputFecha.append(label);
	divInputFecha.append(inputMes);
	divInputFecha.append(span);
	divInputFecha.append(inputAnio);

	formRegistrarTarjeta.append(divInputTarjeta);
	formRegistrarTarjeta.append(divInputFecha);
	formRegistrarTarjeta.append(btnContinuar);

	return formRegistrarTarjeta;
};

const reRenderTarjeta = (div)=>{
	div.empty();
	if(state.datosTarjeta == null){
		div.append(mensajeRegistrarTarjeta);
		div.append(formRegistrarTarjeta(div));
	}else{
		div.append(formFinal);
	}
	
};

const RegistrarCard = ()=>{
	const div = $("<div></div>");
	const divBg = $("<div class='bg-yellow height100'></div>");
	const icon = $("<i class='icon check'></i>");	
	const h2 = $("<h2>!BIEN¡<br>Ahora puedes usar Yape</h2>");

	setTimeout(()=>{
		reRenderTarjeta(div);
	},3000);

	divBg.append(icon);
	divBg.append(h2);
	div.append(divBg);
	return div;
}