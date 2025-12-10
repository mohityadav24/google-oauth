import express from 'express';
import passport from 'passport';
import cors from 'cors';
import "./config/passport.js";

const app = express();

app.use(cors());
app.use(passport.initialize()); 
app.use(express.json())

export default app;