const nodemailer = require("nodemailer");
const twilio = require("twilio");
const https = require("https");
const { Config } = require("../../src/config")
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const sendNotifications = async (req, res) => {
    try {
        const { userEmail, userPhone, message, type } = req.body;

        if(type === 'email') {
            const transporter = nodemailer.createTransport({
                //service: "gmail",
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // true para 465, false para 587
                auth: {
                    user: Config.email_user,
                    pass: Config.email_pass_app,
                },
                tls: {
                    rejectUnauthorized: false // 💡 Ignorar certificados auto-firmados
                }
            })

            const mailOptions = {
                from: Config.email_user,
                to: userEmail,
                subject: "Notificación de fondo",
                text: message,
            };

            await transporter.sendMail(mailOptions);
            return res.json({ message: "Email enviado correctamente" });
        }

        if(type === 'sms') {
            
             const client = new twilio(Config.twilio_sid, Config.twilio_auth_token)

            await client.messages.create({
                body: message,
                from: Config.twilio_phone,
                to: userPhone,
            });

            return res.json({ message: "SMS enviado correctamente" });
        }
        res.status(400).json({ message: "Tipo de notificación no válida" });
    } catch (error) {
        console.error("Error en sendNotifications:", error);
        res.status(500).json({ error: "Error interno del servidor" });
        
    }
}

module.exports = {
    sendNotifications
}