import { Router } from "express";
import { 
    createUser, 
    deleteUsuario, 
    getUsuario, 
    getUsuarios, 
    updateUsuario } from "../controllers/users.controllers.js";



const router = Router();


router.get('/', (req, res) => {
    res.send('Hola desde la ruta principal')
});

router.get('/usuarios', getUsuarios );

router.get('/usuarios/:id', getUsuario);

router.post('/usuarios', createUser );

router.delete('/usuarios/:id', deleteUsuario );

router.put('/usuarios/:id', updateUsuario );






router.get('/videos', (req, res) => {
    res.send('no hay videos')
});


export default router;