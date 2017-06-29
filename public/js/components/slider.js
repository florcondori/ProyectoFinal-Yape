'use strict';

const slider = (update)=>{
	const div = $("<div class='container'></div>");
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
		state.page = registrarTelefono;
		update();
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