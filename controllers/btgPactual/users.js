const User = require ('../../src/models/Users');

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find(); // Obtener todos los usuarios de la BD
        res.status(200).json(users);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ message: "Error al obtener los usuarios" });
    }
};

module.exports = { getAllUsers };