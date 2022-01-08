// const http = require('http');

// const hostname = '127.0.0.1';
// const portaDeEntradaParaServidor = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   // res.setHeader('Content-Type', 'text/plain');
//   res.setHeader('Content-Type', 'application/json');
//   res.end(JSON.stringify({"nome": "Mauricio"}));
// });

// server.listen(portaDeEntradaParaServidor, hostname, () => {
//   console.log(`Server running at http://${hostname}:${portaDeEntradaParaServidor}/ ZZZZ XXXXX HHHHH`);
// });


const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = 3000
const app = express()
app.use(cors())
app.use(bodyParser.json())

const myBD = [];

app.post('/', (req, res) => {
  if (req.body.cpf !== '') {
    myBD.push(req.body)
    console.log(myBD)
    res.status(201).send('Registrado com sucesso')
  } else {
    res.status(400).send('CPF não pode ser em branco')
  }
})

app.get('/', (req, res) => {
  res.status(200).json({myBD});
});
 
app.listen(port, () => {
  console.log('Server started on: ' + port);
});