'use strict';
const render = (root)=>{
	root.empty();

	const wrapper = $("<div class='wrapper'></div>");

	wrapper.append(state.page(_ => render(root)));
	
	root.append(wrapper);
}

const state = {
	page: slider,
	telefono: null,
	code: null,
	nombre: null,
	email: null,
	tarjeta: null,
	mes: null,
	anio: null,
	clave: null	
};

$(_=>{
	const root = $(".root");
	render(root);

	$('.custom1').owlCarousel({
		loop:true,
	    animateOut: 'slideOutDown',
	    animateIn: 'flipInX',
	    items:1,
	    margin:30,
	    stagePadding:30,
	    smartSpeed:450
	});
});
