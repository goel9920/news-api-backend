import express from 'express';
import connectDB from './db/mongoose.js';

import authRoutes from './src/routes/auth.js';
import newsRoutes from './src/routes/news.js';

const app=express();

connectDB();

app.use(express.urlencoded({ limit: "50mb", extended: true })); // to access req.body
app.use(express.json({ extended: false })); // to access req.body


const PORT=process.env.PORT || 3000;

app.use('/auth',authRoutes);
app.use('/news',newsRoutes);

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})