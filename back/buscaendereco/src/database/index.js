const mongoose = require("mongoose");

try{
    mongoose.connect(process.env.DB_ADDRESS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        authSource: process.env.DB_NAME
    });
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