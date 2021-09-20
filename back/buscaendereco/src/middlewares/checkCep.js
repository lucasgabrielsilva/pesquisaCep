const BuscaCep = require('busca-cep');

module.exports = async (req, res, next) =>{
    try{
        BuscaCep(req.body.cep, {sync: false, timeout: 15000}).then((data) => {
            res.locals.address = data;
            return next();
        }).catch(err => {
            return res.status(500).send({status: "ERROR", msg: err.toString()});
        });
    } catch(err){
        return res.status(500).send({status: "ERROR", msg: err.toString()});
    }
}