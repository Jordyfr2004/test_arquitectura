import express from 'express'
import rutas from './routes/users.routes.js'
import { port } from './config.js'


const app = express()

app.use(express.json())

app.use(rutas)


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
    //console.log('hola mundo')
    //console.log('todo bien')
})


//usar npm run dev para ejecutar en el terminal