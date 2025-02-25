import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name es required']
    },
    email: {
        type: String,
        required: [true, 'Name es required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Name es required'],
    },
    img: {
        type: String,
    },
    roles: {
        type: [String],
        default: ['USER_ROLE'],
        enum: ['USER_ROLE', 'ADMIN_ROLE']
    },
});

export const UserModel = mongoose.model('User', userSchema);