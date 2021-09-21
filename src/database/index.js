const mongoose = require("mongoose");

try{
    mongoose.connect(process.env.DB_ADDRESS);
} catch(err){
    process.exit(err);
}
mongoose.connection.on("connected", err =>{
    console.log("DB connection successful");
});
mongoose.connection.on("error", err =>{
    process.exit(err);
});

module.exports = mongoose;