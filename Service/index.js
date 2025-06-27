import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes.js'
import cors from 'cors'

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header(
        'Access-Control-Allow-Headers', 'Origin,X-CSRF-Token, X-Requested-With, Accept-Version, Content-Length, Content-MD5, Content-Type, Accept, Date, X-Api-Version, Authorization, X-Auth-Token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS,PATCH');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

const startServer = async () => {
    try {
        await mongoose.connect("mongodb+srv://utp4321:MK9nWTHNNTwZ5COP@proyectos.tdxmdtj.mongodb.net/pasaporte?retryWrites=true&w=majority&appName=proyectos");
        console.log('Connected to DB');

        app.use(cors());
        app.use(express.json());
        app.use('/api', routes);

        app.listen(9000,() => {
            console.log("Server started on port 9000");
        });
    } catch (error) {
        console.error('Error connecting to DB or starting server:', error);
    }
};

startServer();