var express = require('express');
var router = express.Router();

const Cliente = require('./../models/Cliente');

/**
 * Ruta GET: Obtiener Clientes 
 * @param {Object} Request - Objecto Request incluye informacion acerca de la peticion
 * @param {Object} Response - Objecto para generar una respuesta 
 * @param {function} next - Callback para continuar con la siguiente linea de codigo - MiddleWare
 * Obtiene todos los clientes desde la base de datos, sino existe alguno envia un array vacio.
 * @author Sebastian Guevara <rlxsebas@gmail.com>
 * @version 1.0.0
 * date  07/25/2017 DD-MM-YYYY
 */
router.get('/obtenerClientes', function(req, res, next) {
    Cliente.find({}).then(function(clientes) {
        res.send(clientes);
    });
});

/**
 * Ruta POST: RegistrarCliente 
 * @param {Object} Request - Objecto Request incluye informacion acerca de la peticion
 * @param {Object} Response - Objecto para generar una respuesta 
 * @param {function} next - Callback para continuar con la siguiente linea de codigo - MiddleWare
 * Registra el cliente en la base de datos tomando los valores enviados en la peticion
 * Paso seguido, ejecuta el metodo guardar si ocurre un error envia un codigo 500 con la descripcion del error generado. 
 * @author Sebastian Guevara <rlxsebas@gmail.com>
 * @version 1.0.0
 * date  07/25/2017 DD-MM-YYYY
 */
router.post('registrarCliente', (req, res, next) => {
    var cliente = new Cliente({
        id: req.body.id,
        name: req.body.name,
        company: req.body.company,
        position: req.body.position,
        tel: req.body.tel,
        email: req.body.email
    });

    cliente.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'Ha ocurrido un error',
                error: err
            });
        }
        res.status(201).json({
            message: "Cliente creado satisfactoriamente",
            obj: result
        });
    });
});

module.exports = router;