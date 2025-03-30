module.exports = [
    {   //* PM2 config file
        script: 'server.js',   // Archivo principal que ejecuta mi backend
        name: 'koibanx-BACK',  // Nombre con el que se identificará el proceso en PM2
        exec_mode: 'cluster',  // Ejecutará la aplicación en modo clúster
        instances: 2           // Creará 2 instancias del servidor
    }
]