//importing the required modules
import express from 'express';
import cors from 'cors';
import connectDB from './config/mongoConnect.js';
import dotenv from 'dotenv';
import router from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cookieParser from "cookie-parser";
import cartRouter from './routes/cartRoute.js';

//importing the required modules
dotenv.config();

connectDB();// //connecting to the database
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:5173', // <-- no space, no slash
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//importing the routes
app.use(cookieParser());
app.use('/user', router);
app.use('/product', productRouter);
app.use('/cart', cartRouter);
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});