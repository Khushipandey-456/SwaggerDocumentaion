const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];

const doc = {
    info: {
        title: 'Swagger Node API',
        description: 'This is a simple API with Swagger documentation.',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};

//  Swagger JSON
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log('Swagger JSON generated successfully');
});