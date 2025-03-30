const express = require('express')
const Fund = require("../src/models/Fund"); 

 const { 
  subscribeToFund,
  leaveFund,
  getTransactions,
  sendNotifications,
  getAllUsers
 } = require('../controllers');

const router = express.Router()

// Ruta para obtener todos los fondos
router.get("/funds", async (req, res) => {
    try {
      const funds = await Fund.find();
      res.json(funds);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los fondos" });
    }
  });

// 📌 Endpoint para suscribirse y dar de baja la inscripcion a un fondo
router.post("/subscribe", subscribeToFund);
router.post("/leaveFund", leaveFund);
router.post("/sendNotification", sendNotifications);


// 📂 Rutas para consultar transacciones y usuarios
router.get("/transactions/:userId", getTransactions);
router.get('/users', getAllUsers);



module.exports = router