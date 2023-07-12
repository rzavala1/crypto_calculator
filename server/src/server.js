const express = require('express');
const http = require('http');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cors = require('cors');
app.use(cors());


const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

const crytoController = require('./controllers/crypto.controller');
crytoController.getDataCrypto(server);