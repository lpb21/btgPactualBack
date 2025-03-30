require("dotenv").config();

module.exports.Config = {
  port: process.env.PORT,

  //*Variables MongoDB
  mongo_uri: process.env.MONGO_URI,

  cors_origin: process.env.CORS_ORIGIN,

  email_user: process.env.EMAIL_USER,
  email_pass: process.env.EMAIL_PASS,
  email_pass_app: process.env.EMAIL_PASS_APP,
  twilio_sid: process.env.TWILIO_SID,
  twilio_auth_token: process.env.TWILIO_AUTH_TOKEN,
  twilio_phone: process.env.TWILIO_PHONE
};

