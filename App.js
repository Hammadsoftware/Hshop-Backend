// importing the required modules
import express from 'express';
import cors from 'cors';
import connectDB from './config/mongoConnect.js';
import dotenv from 'dotenv';
import router from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cookieParser from "cookie-parser";
import cartRouter from './routes/cartRoute.js';

dotenv.config();
connectDB(); // connecting to the database

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://h-shop-production.up.railway.app', // make sure this matches frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// importing the routes
app.use('/user', router);
app.use('/product', productRouter);
app.use('/cart', cartRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
