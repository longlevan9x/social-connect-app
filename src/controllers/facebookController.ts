import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/user';

class FacebookController {
    authenticate(req: Request, res: Response, next: any) {
        // Logic for initiating Facebook authentication
    }

    async callback(req: Request, res: Response) {
        // Logic for handling the callback from Facebook after authentication
        try {
            const reqUser: IUser = req.user as IUser;
            let user = await User.findOne({ facebookId: reqUser?.facebookId });
            if (!user) {
                user = new User({
                    facebookId: reqUser?.facebookId,
                    name: reqUser?.name,
                });
                await user.save();
            }

            // Create JWT token
            const token = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET!, { expiresIn: '1h' });

            res.json({ message: 'Facebook authentication successful', token });
        } catch (error) {
            res.status(500).send('Error during Facebook authentication');
        }
    }
}

export default FacebookController;