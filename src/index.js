// 1 configurar la dependencia express para montar la aplicacion
import express from 'express';

//2 importamos corse
import cors from 'cors';

//3 importar la configuracion de la base de datos desde db.js
import ConectarBD from '../config/db.js';

//14 importamos el archivo de las rutas
import RoutesCitas from '../routes/RoutesCitas.js';




const app = express();
app.use(cors());
app.use(express.json());
//15 importamos el archivo routes citas
app.use('/api/citas', RoutesCitas);

const port = 5000;

//5 se verifica la conexion de  la base de datos
try {
    await ConectarBD.authenticate();
    console.log('conexion a la base de datos exitosa');

} catch (error) {
    console.error('no hay conexion a la base de datos exitosa', error);

}

//6 ruta para vecrificar en el navegador

app.get(('/'), (req, res) => {
    res.send('Hola mundo')
});

//7 configurar el servidor desde donde me va a escuchar

app.listen(port, () => {
    console.log('el servidor esta corriendo desde http://localhost:5000');

});



