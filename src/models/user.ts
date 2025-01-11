import mongoose, { Schema } from 'mongoose';
import { IUser } from '../types/user';

const UserSchema: Schema = new Schema({
    facebookId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    // Thêm các thuộc tính khác nếu cần
});

const User = mongoose.model<IUser>('User', UserSchema);
export { IUser };

export default User;