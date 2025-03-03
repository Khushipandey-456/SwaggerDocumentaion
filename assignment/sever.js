const express = require('express');
const app = express();
const port = 8000;

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];

const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Phone', price: 800 },
];

// welcome Route 
app.get('/', (req, res) => {
    res.send('Welcome to the Swagger Node.js API');
});

//  users route
app.get('/users', (req, res) => {
    res.json(users);
});

// Route of products
app.get('/products', (req, res) => {
    res.json(products);
});

// Swagger UI
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log("Server Started");
});