'use strict';
const registrarTelefono = (update)=>{
	const divContenido = $("<div></div>");
	const divMensaje =$("<div class='text-center mb-2rem pb-2rem'></div>");
	const img = $("<img src='img/icons/phone.png' alt='phone' class='mt-5rem'>");
	const h2 = $("<h2 class='mv-14px'>Para comenzar validemos tu número</h2>");
	const p = $("<p class='fs-14'>Recibiras un SMS con un código de validación</p>");
	const form = $("<form></form>");
	const divInput = $("<div class='border-botton mv-14px'></div>");
	const icon = $("<i class='icon phoneandnumber'></i>");
	const input = $("<input id='phone' type='text'>");
	const check = $("<input type='checkbox'>");
	const span = $("<span>Acepto los <a href='#'>Terminos y condiciones</a></span>");
	const divButton = $("<div class='flex-center mt-5rem'></div>");
	const button = $("<button>Continuar</button>");
	button.attr('disabled', true);
	
	divMensaje.append(img);
	divMensaje.append(h2);
	divMensaje.append(p);

	divInput.append(icon);
	divInput.append(input);
	divButton.append(button);
	form.append(divInput);
	form.append(check);
	form.append(span);
	form.append(divButton);

	input.on("keyup", (e)=>{
		if(input.val().length == 9){
			input.blur();
		}
	});

	form.on("change",(e)=> {
		if(input.val().length ==9 && check.prop("checked")){
			button.attr('disabled', false);
		}else{
			button.attr('disabled', true);
		}
	});

	form.on("submit",(e)=>{
		e.preventDefault();
		
		registrarCelular((error,data)=>{
			if(error) console.log(error.message);	

				state.code = data;
				update();

		}, {phone:input.val(),terms:true});
	});

	divContenido.append(divMensaje);
	divContenido.append(form);
	
	return divContenido;
};

const reRender = (contenido, update)=>{
	contenido.empty();	

	contenido.append(registrarTelefono(update));
};

const SliderRegistro = (update)=>{
	const div = $("<div></div>");
	const divSlider = $("<div class='custom1 owl-carousel owl-theme mt-5rem'></div>");
	const item1 = $("<div class='item text-center'></div>");
	const img1 = $("<img src='img/icons/icon-people.png'alt='people' class='mv-14px'/>");
	const titleItem1 = $("<h2>Paga a tu Amigos</h2>");
	const mensaje1 = $("<p class='mv-14px'>Paga a quien quieras desde donde quieras, sin usar efectivo</p>");
	const item2 = $("<div class='item text-center'></div>");
	const img2 = $("<img src='img/icons/happy-person.png' alt='happy person' class='mv-14px'/>");
	const titleItem2 = $("<h2>Sin número de Cuenta</h2>");
	const mensaje2 = $("<p class='mv-14px'>Elige a quién pagar desde tu lista de contactos</p>");
	const item3 = $("<div class='item text-center'></div>");
	const img3 = $("<img src='img/icons/group-people.png' alt='group people' class='mv-14px'/>");
	const titleItem3 = $("<h2>Gratis y Seguro</h2>");
	const mensaje3 = $("<p class='mv-14px'>La transferencia es inmediata y gratuita de una cueta a otra</p>");
	const button = $("<button class='mv-14px block'>Registrarme</button>");


	button.on("click", (e)=>{
		e.preventDefault();
		reRender(div, update);
	});

	item1.append(img1);
	item1.append(titleItem1);
	item1.append(mensaje1);	
	item2.append(img2);
	item2.append(titleItem2);
	item2.append(mensaje2);
	item3.append(img3);
	item3.append(titleItem3);
	item3.append(mensaje3);

	divSlider.append(item1);
	divSlider.append(item2);
	divSlider.append(item3);

	div.append(divSlider);
	div.append(button);
	return div;
};