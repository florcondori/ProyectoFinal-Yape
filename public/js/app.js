'use strict';
const render = (root)=>{
	root.empty();

	const wrapper = $("<div class='wrapper'></div>");
	wrapper.append(RegistrarTelefono());

	root.append(wrapper);
}

const state = {
	code: null
};

$(_=>{
	const root = $(".root");
	render(root);
});
