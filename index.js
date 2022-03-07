import dotenv  from 'dotenv';
import Server from './src/models/server.js';

//load env variables
dotenv.config();

const server= new Server();

server.listen();