import express from 'express';
import http from 'http';
import getAllUsers from '../routes/getAllUsers';

const app = express();
const server: http.Server = new http.Server(app);
server.listen(3000);

app.get('/users/all', getAllUsers);

