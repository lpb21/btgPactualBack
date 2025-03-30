const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  fund: { type: mongoose.Schema.Types.ObjectId, ref: "Fund", required: true },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Relación con el usuario
  monto: { type: Number, required: true, min: 1 }, // Monto mínimo de 1 COP,
  tipo: { type: String, enum: ["apertura", "cancelación"], required: true }, // Cambio de nombres a términos del PDF,
  date: { type: Date, default: Date.now },
});

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction
