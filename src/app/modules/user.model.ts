import { Schema, model } from 'mongoose';
import { User, userAddress, userFullName, userOrder } from './user/user.interface';


const userNameSchema = new Schema<userFullName>({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    _id: false
})

const userAddressSchema = new Schema<userAddress>({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    _id: false
})

const userOrderSchema = new Schema<userOrder>({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    _id: false
   

})

const userSchema = new Schema<User>({
    userId: {
        type: Number,
        required: true,
        unique: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,   
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    fullName: userNameSchema,
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    hobbies: {
        type: String,
        emu: ['reading', 'summing', 'journey'],
        _id: false

    },
    address: userAddressSchema,
    order: userOrderSchema,
})


export const UserModel = model<User>('User', userSchema);