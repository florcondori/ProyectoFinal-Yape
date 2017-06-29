'use strict';
const successPage = (update)=>{
	const div = $("<div></div>");
	const divBg = $("<div class='flex-column-center bg-yellow height100'></div>");
	const icon = $("<i class='icon check'></i>");	
	const title1 = $("<h2 class='mv-14px'>!BIEN¡</h2>");
	const title2 = $("<h2>Ahora puedes usar Yape</h2>");
	setTimeout(()=>{
		state.page = registrarCard;
		update();
	},3000);

	divBg.append(icon);
	divBg.append(title1);
	divBg.append(title2);
	div.append(divBg);
	
	return div;
}