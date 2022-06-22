const express = require('express');
const cors = require('cors');
const app = express();

var corsOptions = {
    origin: 'https://localhost:8001'
}
//middleware
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

//routers
const router = require('./routes/userRouter.js');
app.use('/api/users', router)

//api testes
app.get('/', (req, res) => {
    res.json({message: 'Api funcionando'});
})

//port

const PORT = process.env.PORT || 8000;

//server

app.listen(PORT, () => {
    console.log(`Server rodando na port ${PORT}`);
})