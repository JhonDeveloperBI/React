// obtener todos los eventos
// validated with the token

const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const router = require("./auth");



router.get('/',getEventos);

router.post('/',crearEvento);

router.put('/:id',actualizarEvento);

router.delete('/:id',eliminarEvento);

