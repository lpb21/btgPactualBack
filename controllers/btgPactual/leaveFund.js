const User = require ('../../src/models/Users');
const Transaction = require ('../../src/models/Transaction');

const leaveFund = async (req, res) => {
    try {
        const { userId, fundId } = req.body;

    // 1️⃣ Buscar la transacción de apertura
    const existingTransaction = await Transaction.findOne({
        usuario: userId,
        fund: fundId,
        tipo: "apertura"
      });
      
      if (!existingTransaction) {
        return res.status(400).json({ message: "El usuario no está en este fondo." });
      }

      // 2️⃣ Registrar la transacción de cancelación
      const cancelTransaction = new Transaction({
        usuario: userId,
        fund: fundId,
        monto: existingTransaction.monto, // Devolver el mismo monto
        tipo: "cancelación"
      });
      await cancelTransaction.save();

      // 3️⃣ Actualizar balance del usuario
      await User.findByIdAndUpdate(userId, {
        $inc: { balance: existingTransaction.monto }
      });

      res.json({ message: "Cancelación exitosa", cancelTransaction });   
    } catch (error) {
        console.error("Error en leaveFund:", error);
        res.status(500).json({ error: "Error interno del servidor" });
        
    }
}

module.exports = {
    leaveFund
}