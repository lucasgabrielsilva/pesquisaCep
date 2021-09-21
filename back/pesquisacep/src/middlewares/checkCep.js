const BuscaCep = require('busca-cep');

module.exports = async (req, res, next) =>{
    try{
        BuscaCep(req.body.cep, {sync: false, timeout: 15000}).then((data) => {
            if('erro' in data){
                return res.status(404).json({status: "error", message: 'CEP Not Found'});
            }
            else{
                res.locals.address = data;
                return next();
            }
        }).catch(err => {
            return res.status(500).json({status: "error", error: err.toString()});
        });
    } catch(err){
        return res.status(500).json({status: "error", error: err.toString()});
    }
}