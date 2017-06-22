'use strict';

const soloLetras = (e)=>{
	let code = e.which;

	if((code>=97 && code<=122) ||(code>=65 && code<=90) || code==39 || code==32 || code==241 || code==209){
		return true;
	}else{
		return false;
	}
};

const soloNumeros = (e)=>{
	let code = e.which;
	(code>=48 && code<=57) ? true : false
	
};

const validarInput = (input)=>{
	if(input.val() !=null && input.val()!= undefined && input.val().trim() != ""){
		return true;
	}else{
		return false;
	}
};

const validarEmail = (email)=>{
	(/([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(email)) ? true : false
    
}

const solo16Digitos = (e)=>{
	if($(e.target).val().length == 16){
		return false;
	}
};

const solo2Digitos = (e)=>{
	console.log($(e.target));
	if($(e.target).val().length == 2){
		return false;
		$(e.target).blur();
	}
}; 