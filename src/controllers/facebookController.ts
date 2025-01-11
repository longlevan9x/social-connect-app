import { Request, Response } from 'express';
import User, { IUser } from '../models/user';

class FacebookController {
    authenticate(req: Request, res: Response, next: any) {
        // Logic for initiating Facebook authentication
    }

    async callback(req: Request, res: Response) {
        // Logic for handling the callback from Facebook after authentication
        try {
            const reqUser: IUser = req.user as IUser;
            const user = await User.findOne({ facebookId: reqUser?.facebookId });
            if (!user) {
                const newUser = new User({
                    facebookId: reqUser?.facebookId,
                    name: reqUser?.name,
                });
                await newUser.save();
            }
            res.send('Facebook authentication successful');
        } catch (error) {
            res.status(500).send('Error during Facebook authentication');
        }
    }
}

export default FacebookController;