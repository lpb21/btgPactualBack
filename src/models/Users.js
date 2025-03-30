const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  balance: { type: Number, default: 500000, min: 0 }, // Saldo inicial de COP $500,000
  fechaCreacion: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
module.exports = User
