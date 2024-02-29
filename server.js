const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
// helps front end access backend 
app.use(express.static(`${__dirname}/client`))

const {getAllToDos, addAToDo} = require('./controller');

app.get('/api/getToDos', getAllToDos);
app.post('/api/getToDos', addAToDo);

app.listen(5501, () => console.log(`Take us to warp 5501!`));