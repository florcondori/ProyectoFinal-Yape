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
	if(code>=48 && code<=57){
		return true;
	}else{
		return false;
	}
	
};

const validarInput = (input)=>{
	if(input.val() !=null && input.val()!= undefined && input.val().trim() != ""){
		return true;
	}else{
		return false;
	}
};

const validarEmail = (e)=>{
	if(/([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test($(e.target).val())){
		return true;
	}else{
		return false;
	}
    
}

const solo16Digitos = (e)=>{
	let code = e.which;
	if(code>=48 && code<=57 && $(e.target).val().length < 16){
		return true;
	}else{
		return false;
	}
};

const solo2Digitos = (e)=>{
	let code = e.which;	
	if(code>=48 && code<=57 && $(e.target).val().length <2){
		return true;
	}else{
		return false;
	}
}; 

const solo9Digitos = (e)=>{
	let code = e.which;	
	if(code>=48 && code<=57 && $(e.target).val().length <9){
		return true;
	}else{
		return false;
	}
};

