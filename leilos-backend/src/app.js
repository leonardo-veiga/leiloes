const express = require('express');
const bodyparser = require('body-parser');

var Produto = require('./models/Produto')
var Lancamento = require('./models/Lancamento')
var mockProdutos = require('./mocks/mockProdutos');
var mockLances = require('./mocks/mockLances');

const app = express();

var listProdutos = [];
listProdutos.push(mockProdutos.list);

var listLances = [];
listLances.push(mockLances.list);

app.use(bodyparser.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/listProdutos', (req, res) => res.json(listProdutos));
app.post('/addProduto', (req, res) => {
	var body = req.body;
	var novoProduto = new Produto(body);
	listProdutos.push(novoProduto);
	res.json({status:'ok'});
});
app.get('/listLances', (req, res) => res.json(listLances));
app.post('/addLance', (req, res) => {
	var body = req.body;
	var novoLance = new Lancamento(body);
	listLances.push(novoLance);
	res.json({status:'ok'});
});

app.listen(3000, () => console.log('Leilões rodando na porta 3000!'));