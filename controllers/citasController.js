// 10 importamos el modelo

import Citas from '../models/Citas.js'

// 11 colocamos la funcion de agregar citas

export const agregarCitas = async (req, res) => {

    try {
        await Citas.create(req.body)
        res.json({ msg: "se agrego la cita satisfactoriamente" })
    } catch (error) {
        res.json({ msg: error.message })

    }
}

//15 la funcion de mostrar citas


export const mostrarCitas = async (req, res) => {

    try {
        const citas = await Citas.findAll();
        res.json(citas);

    } catch (error) {
        res.json({ msg: error.message })

    }
}

//16 funcion mostrar una cita

export const getCita = async (req, res) => {


    try {
        const cita2 = await Citas.findAll(
            {
                where: { id: req.params.id }
            });
            if (!cita2[0]){ res.status(400).json({msg:"No existe ningina cita con ese ID"})
            return;}

        res.json(cita2);

    } catch (error) {
        res.json({ msg: error.message });
    }
}


//17 modificar citas

export const modificarCitas = async (req, res) => {

    try {

        await Citas.update(req.body, {
            where: { id: req.params.id }

        });
        res.json({ msg: "se modifico la cita" })

    } catch (error) {
        res.json({ msg: error.message });

    }
}

//18 funcion eliminar cita

export const borrarCita = async (req, res) => {
    try {
        await Citas.destroy( {
            where: { id: req.params.id }

        });
        res.json({ msg: "se elimino la cita" })

    } catch (error) {

        res.json({ msg: error.message });

    }


}