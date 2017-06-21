'use strict';
const render = (root)=>{
	root.empty();

	const wrapper = $("<div class='wrapper'></div>");
	wrapper.append(SliderRegistro());

	root.append(wrapper);
}

const state = {
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
