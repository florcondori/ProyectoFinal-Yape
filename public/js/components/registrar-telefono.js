'use strict';
const registrarTelefono = ()=>{
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

	form.on("change",(e)=> {
		console.log(input.val());
		if(input.val().length ==9 && check.prop("checked")){
			button.attr('disabled', false);
		}else{
			button.attr('disabled', true);
		}
	});

	form.on("submit",(e)=>{
		e.preventDefault();
		$.post("/api/registerNumber",{phone:input.val(),terms:true},(json)=>{
			console.log(json.message);
			console.log(json.data);
		});
	});

	divContenido.append(divMensaje);
	divContenido.append(form);
	return divContenido;
};

const reRender = (contenido)=>{
	contenido.empty();	

	contenido.append(registrarTelefono());
};

const SliderRegistro = (update)=>{
	const div = $("<div></div>");
	const divSlider = $("<div class='custom1 owl-carousel owl-theme'></div>");
	const div1 = $("<div class='item'><img src='img/icons/icon-people.png'/></div>");
	const div2 = $("<div class='item'><img src='img/icons/happy-person.png'/></div>");
	const button = $("<button>Registrarme</button>");

	button.on("click", (e)=>{
		e.preventDefault();
		reRender(div);
	});

	divSlider.append(div1);
	divSlider.append(div2);
	div.append(divSlider);
	div.append(button);
	return div;
};