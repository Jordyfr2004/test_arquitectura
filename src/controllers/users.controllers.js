import { pool } from "../conexion.js";

export const getUsuarios = async (req, res) =>{
    const { rows} = await pool.query('SELECT * FROM usuarios');
    res.json(rows);
};

export  const getUsuario = async (req, res) =>{
    const { id } = req.params
    const { rows } = await pool.query('SELECT * FROM usuarios WHERE id = $1',[id]);

    if (rows.length === 0) {
        return  res.status(404).json({ message: "usuario no encontrado"});
    }

    res.json(rows[0]);
};

export const createUser = async(req, res) => {
    const data = req.body
    const { rows } = await pool.query('INSERT INTO usuarios (nombre, correo) VALUES ($1, $2) RETURNING *', [data.nombre, data.correo]);
    return res.json(rows[0]);
};


export const deleteUsuario = async (req, res) => {
    const { id } = req.params;
    const { rowCount } = await pool.query('DELETE FROM usuarios WHERE id = $1', [id]);

    if (rowCount === 0) {
        return res.status(404).json({ message: "usuario no encontrado" });
    }

    return res.sendStatus(204);
};


//export const deleteUsuario = async(req, res) => {
    //const { id } = req.params
    //const {rowCount} = await pool.query('DELETE FROM usuarios WHERE id = $1',[id]);

    //if (rowCount === 0) {
     //   return res.status(404).json({message: "usuario no encontrado"});
    //}

    //return res.sendStatus(2004)
//};

export const updateUsuario = async (req, res) => {
    const { id } = req.params
    const data = req.body;
    const { rows} = await pool.query('UPDATE usuarios SET nombre = $1, correo= $2 WHERE id = $3', [data.nombre, data.correo, id])
    return res.json(rows[0]);
}