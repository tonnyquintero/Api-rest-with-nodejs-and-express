const express = require('express');
const cors = require('cors');
const routerApi = require('./routes')
const { errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});
