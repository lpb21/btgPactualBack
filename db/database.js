
const { Config } = require("../src/config/index")
const mongoose = require("mongoose");

//*Conexion a BD MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(Config.mongo_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('🔥 Conectado a MongoDB');
    } catch (error) {
      console.error('Error conectando a MongoDB:', error);
      process.exit(1);
    }
}

module.exports = { 
  connectDB
};
