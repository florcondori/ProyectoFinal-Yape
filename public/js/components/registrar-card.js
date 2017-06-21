'use strict';
const RegistrarCard = ()=>{
	const div = $("<div class='bg-yellow height100'></div>");
	const icon = $("<i class='icon check'></i>");	
	const h2 = $("<h2>!BIEN¡<br>Ahora puedes usar Yape</h2>");

	div.append(icon);
	div.append(h2);
	return div;
}