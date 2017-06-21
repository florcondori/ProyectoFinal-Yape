'use strict';
const registrarTarjeta = ()=>{
	
};

const crearUsuario = (callback, obj)=>{
	$.post("/api/createUser",obj,(json)=>{
		if(!json.success) callback(new Error(json.message));

		callback(null, json.data);
	});
};

const refrescarCodigo = (callback, obj)=>{
	$.post("/api/resendCode",obj,(json)=>{
		if(!json.success) callback(new Error(json.message));

		callback(null, json.data);
	});
};

const registrarCelular = (callback, obj)=>{
	$.post("/api/registerNumber",obj,(json)=>{
		if(!json.success) callback(new Error(json.message));

		callback(null, json.data);
	});
};