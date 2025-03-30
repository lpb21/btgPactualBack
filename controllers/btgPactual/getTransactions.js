const Transaction = require("../../src/models/Transaction");

const getTransactions = async (req, res) => {
    try {
        const { userId } = req.params;
        const transactions = await Transaction.find({ usuario: userId })
        .populate('fund', 'nombre') // Solo traer el campo "nombre" de la colección "funds"
      .sort({ createdAt: -1 }) // Ordenar por fecha descendente
      .limit(10); // Obtener solo las últimas 10 transacciones

      res.json(transactions);
        
    } catch (error) {
        console.error("Error en getTransactions:", error);
        res.status(500).json({ error: "Error interno del servidor" });
        
    }
}

module.exports = {
    getTransactions
}