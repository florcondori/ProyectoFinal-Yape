'use strict';
const registrarCard = (update)=>{
	const registrarCard = $("<div class='container'></div>");
	const div = $("<div class='text-center mb-2rem pb-2rem'></div>");
	const img = $("<img class='mt-5rem' src='img/icons/bcp-logo.png' alt='tarjeta'/>");
	const h2 = $("<h2 class='mv-14px'>Registrar tu tarjeta débito BCP</h2>");
	const p = $("<p class='fs-14'>Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles</p>");
	const formRegistrarTarjeta = $("<form></form>");
	const divInputTarjeta = $("<div class='border-botton mv-14px'></div>");
	const iconTarjeta = $("<i class='icon card'></i>");
	const inputTarjeta = $("<input id='tarjeta' type='text'>");
	const divInputFecha = $("<div></div>");
	const label = $("<label>Fecha de vencimiento</label>");
	const inputMes = $("<input class='width-35 border-botton' placeholder='00' type='text'/>");
	const span = $("<span>/<span>");
	const inputAnio = $("<input class='width-35 border-botton' placeholder='Año' type='text'/>");
	const divButton = $("<div class='flex-center mt-5rem'></div>");
	const btnContinuar = $("<button>continuar</button>");
	btnContinuar.attr('disabled', true);

	let validateCard,
		validateMes,
		validateAnio;

	const activeBoton = ()=>{

		if(validateCard && validateMes && validateAnio){
			btnContinuar.attr('disabled', false);
		}else{
			btnContinuar.attr('disabled', true);
		}
	}

	inputTarjeta.on({
		keypress: solo16Digitos,
		keyup:(e)=>{
			if($(e.target).val().length == 16){				
				validateCard = true;
				activeBoton();
				$(e.target).parent().removeClass("border-red");
			}else{
				validateCard = false;
				activeBoton();
				$(e.target).parent().addClass("border-red");
			}
		}
	});

	inputMes.on({
		keypress: solo2Digitos,
		keyup: (e)=>{
			if($(e.target).val().toString().length == 2 && $(e.target).val()<=12){
				$(e.target).removeClass("border-red");
				validateMes = true;
				activeBoton();
			}else{
				validateMes = false;
				activeBoton();
				$(e.target).addClass("border-red");
			}
		}
	});

	inputAnio.on({
		keypress: solo2Digitos,
		keyup: (e)=>{
			if($(e.target).val().length == 2 && $(e.target).val()>=17 && $(e.target).val()<=24){
				$(e.target).removeClass("border-red");
				validateAnio = true;
				activeBoton();
			}else{
				validateAnio = false;
				activeBoton();
				$(e.target).addClass("border-red");
			}
		}
	});

	formRegistrarTarjeta.on("submit", (e)=>{
		e.preventDefault();

		if(inputTarjeta.val().length == 16 && inputMes.val()<=12 && inputAnio.val()>= 17 && inputAnio.val()<=24){
		
			state.tarjeta = inputTarjeta.val();
			state.mes = inputMes.val();
			state.anio = inputAnio.val();
			state.page = registrarClave;						
			update();
			
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
	divButton.append(btnContinuar);

	formRegistrarTarjeta.append(divInputTarjeta);
	formRegistrarTarjeta.append(divInputFecha);
	formRegistrarTarjeta.append(divButton);

	div.append(img);
	div.append(h2);
	div.append(p);

	registrarCard.append(div);
	registrarCard.append(formRegistrarTarjeta);

	return registrarCard;
};



