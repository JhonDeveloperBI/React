// obtener todos los eventos
// validated with the token

/*
/api/events/
*/

const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const router = require("express").Router();
const { validarJWT } = require("../middlewares/validar-jwt");

// valida todas las rutas con este midellware
router.use( validarJWT ); 

//router.get('/',validarJWT,getEventos);

router.get('/',getEventos);

router.post('/',crearEvento);

router.put('/:id',actualizarEvento);

router.delete('/:id',eliminarEvento);


module.exports = router;