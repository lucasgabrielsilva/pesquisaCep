const mongoose = require("../database");

const addressSchema = new mongoose.Schema({
	cep: {
		type: String,
		required: true,
		unique: true
	},
	logradouro: {
		type: String,
		required: true
	},
	complemento: {
		type: String
	},	
	bairro:{
		type: String,
		required: true
	},
	localidade:{
		type: String,
		required: true
	},
	uf:{
		type: String,
		required: true
	},
	ibge: {
		type: String
	},	
	siafi:{
		type: String
	},
	ddd:{
		type: String
	},
	gia:{
		type: String
	}
});

const address = mongoose.model('Address', addressSchema);
module.exports = address;