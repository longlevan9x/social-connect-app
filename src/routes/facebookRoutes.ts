import { Router } from 'express';
import FacebookController from '../controllers/facebookController';

const router = Router();
const facebookController = new FacebookController();

export function setFacebookRoutes(app: Router) {
    app.get('/auth/facebook', facebookController.authenticate);
    app.get('/auth/facebook/callback', facebookController.callback);
}

export default router;