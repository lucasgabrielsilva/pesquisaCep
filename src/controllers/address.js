const Address = require("../models/address");

module.exports = {
    async searchAddress(req, res){
        try{
            const response = await Address.findOne({'cep': req.params.cep});
            if(response){
                return res.status(200).json({status: "Success", data: response});
            }
            else{
                return res.status(404).json({status: "error", message: 'CEP Not Found'});
            }
        } catch(err){
            return res.status(500).json({status: "error", error: toString()});
        }
    },
    async saveAddress(req, res) {
		try{
            const response = await Address.create(res.locals.address);
            if(response){
                return res.status(201).json({ status: "Success", data: response });
            }
		} catch(err){
			return res.status(500).json({ status: "error", error: err.toString()});
		}
    }
};
