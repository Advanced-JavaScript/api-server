const express = require('express');
const cors = require('cors');
const timestamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const notFoundHandler = require('./middleware/404');
const errorHandler = require('./middleware/500');

const data = require('../data/db.json');
var products = data.products;
var categories = data.categories;

const app = express();
app.use(cors());
app.use(express.json());
app.use(timestamp);
app.use(logger);


app.get('/', (req, res) => res.send('Homeeee!'));

app.post('/products', postProduct);
app.get('/products', getAllProducts);
app.get('/products/:id', getProduct);
app.put('/products/:id', putProduct);
app.delete('/products/:id', deleteProduct);

app.post('/categories', postCategory);
app.get('/categories', getAllCategories);
app.get('/categories/:id', getCategory);
app.put('/categories/:id', putCategory);
app.delete('/categories/:id', deleteCategory);

function postProduct(req, res) {
    const record = req.body;
    record.id = products.length + 1;
    products.push(record);
    console.log(record);
    res.status(200).json(record);
}

function getAllProducts(req, res) {
    const count = products.length;
    const results = products;
    res.status(200).json({ count, results });
}

function getProduct(req, res) {
    let product = {};
    for (let i = 0; i < products.length; i++) {
        product = products[i];
        if (product.id === req.params.id)
            break;
    }
    res.status(200).json(product);
}

function putProduct(req, res) {
    let product = {}, i;
    for (i = 0; i < products.length; i++) {
        product = products[i];
        if (product.id === req.params.id)
            break;
    }
    if (product.id !== req.params.id) {
        res.statusMessage = 'product does not exist';
        res.status(404).json({ error: 'Not Found' });
    }
    const record = req.body;
    record.id = req.params.id;
    products[i] = record;
    res.status(200).json(record);
}

function deleteProduct(req, res) {
    let obj = {}, i;
    for (i = 0; i < products.length; i++) {
        obj = products[i];
        if (obj.id === req.params.id)
            break;
    }
    if (obj.id !== req.params.id) {
        res.statusMessage = 'category does not exist';
        res.status(404).json({ error: 'Not Found' });
    }
    products.splice(i, 1);
    res.json(obj);
}

function postCategory(req, res) {
    const record = req.body;
    record.id = categories.length + 1;
    categories.push(record);
    console.log(record);
    res.status(200).json(record);
}

function getAllCategories(req, res) {
    const count = categories.length;
    const results = categories;
    res.status(200).json({ count, results });
}

function getCategory(req, res) {
    let category = {};
    for (let i = 0; i < categories.length; i++) {
        category = categories[i];
        if (category.id === req.params.id)
            break;
    }
    res.status(200).json(category);
}

function putCategory(req, res) {
    let category = {}, i;
    for (i = 0; i < categories.length; i++) {
        category = categories[i];
        if (category.id === req.params.id)
            break;
    }
    if (category.id !== req.params.id) {
        res.statusMessage = 'category does not exist';
        res.status(404).json({ error: 'Not Found' });
    }
    const record = req.body;
    record.id = req.params.id;
    categories[i] = record;
    res.status(200).json(record);
}

function deleteCategory(req, res) {
    let obj = {}, i;
    for (i = 0; i < categories.length; i++) {
        obj = categories[i];
        if (obj.id === req.params.id)
            break;
    }
    if (obj.id !== req.params.id) {
        res.statusMessage = 'category does not exist';
        res.status(404).json({ error: 'Not Found' });
    }
    categories.splice(i, 1);
    res.json(obj);
}
//for testing purposes
app.get('/bad', (req, res)=> {
    throw new Error('Internal Server Error')
});

app.use('*',notFoundHandler);
app.use(errorHandler);

module.exports = {
    apiServer: app,
    start: port => {
        app.listen(port, () => console.log('Magic happens on', port));
    },
};
