import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    facebookId: string;
    name: string;
    // Thêm các thuộc tính khác nếu cần
}

const UserSchema: Schema = new Schema({
    facebookId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    // Thêm các thuộc tính khác nếu cần
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;