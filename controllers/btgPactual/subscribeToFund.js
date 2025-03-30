const User = require ('../../src/models/Users');
const Fund = require ('../../src/models/Fund');
const Transaction = require ('../../src/models/Transaction');

const subscribeToFund = async (req, res) => {
    try {
        const { userId, fundId } = req.body;

        // 1️⃣ Verificar si el usuario existe
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
          }

        // 2️⃣ Verificar si el fondo existe
        const fund = await Fund.findById(fundId);
        if (!fund) {
        return res.status(404).json({ message: "Fondo no encontrado" });
        }

        // 3️⃣ Verificar si el usuario tiene saldo suficiente
        if (user.balance < fund.montoMinimo) {
            return res.status(400).json({
              message: `No tiene saldo disponible para vincularse al fondo ${fund.nombre}`,
            });
          }

        // 4️⃣ Descontar el saldo del usuario
        user.balance -= fund.montoMinimo;
        await user.save();

        // 5️⃣ Crear la transacción
        const transaction = new Transaction({
            usuario: userId,
            fund: fundId,
            monto: fund.montoMinimo,
            tipo: "apertura",
          });

        await transaction.save();

        // 6️⃣ Responder con éxito
        res.status(201).json({
            message: `Se ha suscrito exitosamente al fondo ${fund.nombre}`,
            transaction,
          });
        
    } catch (error) {
        console.error("Error en subscribeToFund:", error);
        res.status(500).json({ error: "Error interno del servidor" });
        
    }
}

module.exports = {
    subscribeToFund
}