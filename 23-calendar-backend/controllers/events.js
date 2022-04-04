const { response } = require('express');


const getEventos = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg:'getEventos'
    })
}



const crearEvento = (req, res = response) => {

    //console.log(req.body); 
    /*
      {
        "title":"Evento 1",
        "start":0,
         "end":0
      }
    */



    res.status(200).json({
        ok: true,
        msg:'crearEvento'
    })
}


const actualizarEvento = (req, res = response) => {
    res.status(200).json({
        ok: true,
        msg:'actualizarEvento'
    })
}

const eliminarEvento = (req, res = response) => {
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