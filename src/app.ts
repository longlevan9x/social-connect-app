import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import passportFacebook from 'passport-facebook';
import FacebookController from './controllers/facebookController';

dotenv.config();

const app = express();
const FacebookStrategy = passportFacebook.Strategy;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

// Passport configuration
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID!,
    clientSecret: process.env.FACEBOOK_APP_SECRET!,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
},
    function (accessToken: string, refreshToken: string, profile: any, done: (error: any, user?: any) => void) {
        // Logic to find or create user in database
        return done(null, profile);
    }
));

// Routes
const facebookController = new FacebookController();
app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), (req: Request, res: Response) => facebookController.callback(req, res));
// app.get('/', (req: Request, res: Response) => res.send({ message: 'Welcome to Facebook OAuth' }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI!)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});