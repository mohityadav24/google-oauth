import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import authRoutes from './routes/auth.routes.js'
import passport from 'passport';


mongoose.connect(process.env.MONGO_URI,
    console.log("mongo is connected")
)


app.use(passport.initialize());
app.use('/auth', authRoutes);

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});