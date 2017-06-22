'use strict';
const render = (root)=>{
	root.empty();

	const wrapper = $("<div class='wrapper'></div>");

	if(state.code === null && state.usuario === null){
		wrapper.append(SliderRegistro(_ => render(root)));
	}
	if(state.code !== null && state.usuario === null){
		wrapper.append(CrearUsuario(_ => render(root)));
	}

	if(state.usuario !== null){
		wrapper.append(RegistrarCard());
	}
	
	root.append(wrapper);
}

const state = {
	usuario: null,
	code: null
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
