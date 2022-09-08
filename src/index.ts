import express from 'express';
import http from 'http';
import getAllProducts from '../routes/getAllProducts';

const app = express();
const server: http.Server = new http.Server(app);
server.listen(3000);

app.get('/users/all', getAllProducts);

