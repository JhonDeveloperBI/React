// obtener todos los eventos
// validated with the token

/*
/api/events/
*/

const { check } = require("express-validator");
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const router = require("express").Router();
const { validarJWT } = require("../middlewares/validar-jwt");
const { validarCampos } = require("../middlewares/validar-campos");
const { isDate } = require("../helpers/isDate");

// valida todas las rutas con este midellware
router.use( validarJWT ); 

//router.get('/',validarJWT,getEventos);

router.get('/',getEventos);

router.post('/',[ check('title','El titulo es obligatorio').not().isEmpty(), check('start','Fecha Inicio obligatorio').custom( isDate ), check('end','Fecha Final obligatorio').custom( isDate ) ,    validarCampos
                     ], crearEvento);

router.put('/:id',actualizarEvento);

router.delete('/:id',eliminarEvento);


module.exports = router;