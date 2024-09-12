// 12 importamos el express
import express from 'express'

//13 importamos el controlador

import { agregarCitas, borrarCita, getCita, modificarCitas, mostrarCitas, } from '../controllers/citasController.js';

const router = express.Router();

//14 metodos crud 

router.post('/', agregarCitas);
router.get('/', mostrarCitas);
router.get('/:id', getCita);
router.put('/:id', modificarCitas);
router.delete('/:id', borrarCita);
export default router;