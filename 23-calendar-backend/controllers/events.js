

const getEventos = (req, res) => {
    res.status(200).json({
        ok: true,
        msg:'getEventos'
    })
}



const crearEvento = (req, res) => {
    res.status(200).json({
        ok: true,
        msg:'crearEvento'
    })
}


const actualizarEvento = (req, res) => {
    res.status(200).json({
        ok: true,
        msg:'actualizarEvento'
    })
}

const eliminarEvento = (req, res) => {
    res.status(200).json({
        ok: true,
        msg:'eliminarEvento'
    })
}


module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento 
}