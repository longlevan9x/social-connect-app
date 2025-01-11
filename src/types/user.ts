import { Document } from 'mongoose';

export interface IUser extends Document {
    facebookId: string;
    name: string;
    // Thêm các thuộc tính khác nếu cần
}