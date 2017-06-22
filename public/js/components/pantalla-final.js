'use strict';
const pantallaFinal = ()=>{
	const divFinal = $("<div></div>");
	const divCabecera = $("<div class='bg-purple-ligth height40'></div>");
	const imgCabecera = $("<img src='img/icons/happy-face.png'/>");
	const title = $("<h2>Hola</h2>");
	const divCuerpo = $("<div class='bg-purple-dark height60'></div>");
	const p = $("<p>ULTIMOS MOVIMIENTOS</p>");
	const divMensaje = $("<div></div>");
	const iconMensaje = $("<img src='img/icons/icon.png'/>"); 
	const mensaje = $("<span>¿Aun no realizas tu primer pago?<br>Es rapido y sencillo</span>");
	const divIcons = $("<div class='flex-between'><div>");
	const divEnviar = $("<div><div>");
	const iconEnviar = $("<i class='icon send'></i>");
	const subEnviar = $("<p>ENVIAR PAGO</p>");
	const divRecibir = $("<div><div>");
	const iconRecibir = $("<i class='icon code-qr'></i>");
	const subRecibir = $("<p>RECIBIR PAGO</p>");

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