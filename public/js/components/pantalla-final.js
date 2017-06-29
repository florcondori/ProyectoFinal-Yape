'use strict';
const pantallaFinal = ()=>{
	const divFinal = $("<div></div>");
	const divCabecera = $("<div class='bg-purple-ligth height40 text-center'></div>");
	const imgCabecera = $("<img class='mt-3rem' src='img/icons/happy-face.png'/>");
	const title = $("<h2 class='mv-14px text-white'>Hola</h2>");
	const divCuerpo = $("<div class='bg-purple-dark height60'></div>");
	const p = $("<p class='p-14px text-white'>ULTIMOS MOVIMIENTOS</p>");
	const divMensaje = $("<div class='flex-align-center'></div>");
	const iconMensaje = $("<img class='p-14px' src='img/icons/icon.png'/>"); 
	const mensaje = $("<span class='text-white interlineado'>¿Aun no realizas tu primer pago?<br>Es rapido y sencillo</span>");
	const divIcons = $("<div class='flex-around mt-5rem'></div>");
	const divEnviar = $("<div class='text-center'></div>");
	const iconEnviar = $("<i class='icon send icon-mediano'></i>");
	const subEnviar = $("<p class='text-white'>ENVIAR PAGO</p>");
	const divRecibir = $("<div class='text-center'></div>");
	const iconRecibir = $("<i class='icon code-qr icon-mediano'></i>");
	const subRecibir = $("<p class='text-white'>RECIBIR PAGO</p>");

	divCabecera.append(imgCabecera);
	divCabecera.append(title);

	divMensaje.append(iconMensaje);
	divMensaje.append(mensaje);

	divEnviar.append(iconEnviar);
	divEnviar.append(subEnviar);
	divRecibir.append(iconRecibir);
	divRecibir.append(subRecibir);
	divIcons.append(divEnviar);
	divIcons.append(divRecibir);

	divCuerpo.append(p);
	divCuerpo.append(divMensaje);
	divCuerpo.append(divIcons);

	divFinal.append(divCabecera);
	divFinal.append(divCuerpo);

	return divFinal;
};