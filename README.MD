# 📌 Backend API - Proyecto BTG

## 🚀 Descripción

Este proyecto es el backend de la aplicación BTG, desarrollado en **Node.js** con **Express.js**. Proporciona una API RESTful para gestionar las funcionalidades del sistema, incluyendo autenticación, manejo de usuarios y consultas a la base de datos.

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución
- **Express.js** - Framework para la API
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **JWT (JSON Web Tokens)** - Autenticación segura
- **AWS S3** - Almacenamiento de archivos estáticos
- **Dotenv** - Manejo de variables de entorno
- **Cors** - Seguridad para peticiones entre dominios

---

## 📁 Estructura del Proyecto

```bash
backend/
│-- src/
│   │-- controllers/       # Controladores de rutas
│   │-- models/            # Modelos de la base de datos
│   │-- routes/            # Definición de endpoints
│   │-- middlewares/       # Middlewares personalizados
│   │-- config/            # Configuración del entorno
│   │-- utils/             # Utilidades y helpers
│   └-- server.js          # Archivo principal del servidor
│-- .env                   # Variables de entorno
│-- package.json           # Dependencias del proyecto
│-- README.md              # Documentación del proyecto
```

---

## 🔌 Instalación y Configuración

### 1️⃣ Clonar el Repositorio

```sh
git clone https://https://github.com/lpb21/btgPactualBack
cd btgPactualBack
```

### 2️⃣ Instalar Dependencias

```sh
npm install
```

### 3️⃣ Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables, aunque no le omiti el .env para fines del ejercicio:

```env
PORT=5000
MONGO_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/btg
JWT_SECRET=tu_secreto_jwt
AWS_ACCESS_KEY_ID=tu_clave_aws
AWS_SECRET_ACCESS_KEY=tu_secreto_aws
S3_BUCKET_NAME=tu_bucket_s3
```

### 4️⃣ Ejecutar el Servidor

Para desarrollo:

```sh
npm run dev
```

Para producción:

```sh
npm start
```

El servidor correrá en `http://localhost:5000`.

---

## 📌 Endpoints Principales

### 🔐 **Autenticación**

#### 🔹 Registro de Usuario en un fondo

```http
POST /v1/subscribe
```

**Body:**

```json
{
  "userId": "67e789ad74fc3d5aa0b71237",
  "fundId": "67e78b6474fc3d5aa0b71244"
}
```

#### 🔹 Cancelacion de membresia en un fondo

```http
POST /v1/leaveFund
```

**Body:**

```json
{
  "userId": "67e789ad74fc3d5aa0b71237",
  "fundId": "67e78b6474fc3d5aa0b71245"
}
```

**Respuesta:**

dependiendo si esta o no, en ese fondo


#### 🔹 Notificaciones a email o linea celular
```http
POST /v1/sendNotification
```
**Body:**

```json
{
  "userPhone": "+573124640886",
  "message": "Tu suscripción al fondo ha sido confirmada.",
  "type": "sms"
}

* si es email asi la hace
{
  "userEmail": "leonardoparrasoft@gmail.com",
  "message": "Tu suscripción al fondo ha sido confirmada.",
  "type": "email"
}
```

#### 🔹 Transacciones por usuario

```http
GET /v1/transactions/[id]
```

#### 🔹 Fondos disponibles

```http
GET /v1/funds
```

#### 🔹 Usuarios activos

```http
GET /v1/users
```



---

## 🖼️ **Despliegue en AWS**

Este backend está configurado para ser desplegado en AWS mediante **EC2** y **S3**.

### 🔹 Pasos para desplegar:

1. **Crear una instancia EC2** con Node.js instalado.
2. **Subir el código al servidor** usando `scp` o un repositorio Git.
3. **Instalar dependencias en EC2:**
   ```sh
   npm install
   ```
4. **Configurar PM2** para mantener el servicio corriendo:
   ```sh
   npm install -g pm2
   pm2 start src/server.js --name btg-backend
   pm2 save
   ```
5. **Configurar el bucket S3** para el almacenamiento de archivos.

---

## 🖼️ **Credenciales**
* Mongo Atlas
```sh
    user: user_admin
    pass: pruebasbtg01
   ```
   * Correo Gmail
```sh
    user: btgpactualpruebas@gmail.com
    pass: pruebasbtg01
   ```
   * Cuenta Twilio
   Para registrar su numero ir al siguiente link: https://console.twilio.com/us1/develop/phone-numbers/manage/verified
```sh
    user: btgpactualpruebas@gmail.com
    pass: Pruebasbtg01*
   ```
      
      * Servidor BackEnd AWS
```sh
    IP: 52.14.73.100
    user: Administrator
    pass: sxQ2IU&!15.713*f-55hgLG!*?mYpokt
   ```

   

## 🛠️ Contribución

Si deseas contribuir, sigue estos pasos:

1. **Haz un fork** del repositorio
2. Crea una nueva rama (`git checkout -b feature-nueva`)
3. Realiza tus cambios y haz un commit (`git commit -m 'Agrega nueva función'`)
4. Sube tu rama (`git push origin feature-nueva`)
5. Crea un Pull Request 🚀

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

**¡Gracias por contribuir! 🎉**

