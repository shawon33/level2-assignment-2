import { Schema, model } from 'mongoose';
import { User, userAddress, userFullName, userOrder } from './user/user.interface';
import bcrypt from 'bcrypt'
import config from "./../config";


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


//  middle ware
userSchema.pre('save', async function (next) {
    const user = this;
    user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_round))
    next();
})


userSchema.post('save', function (doc, next) {
    doc.toJSON = function () {
        const ret = this.toObject();
        delete ret.password;
        return ret;
    };
    next()
})


// next one


userSchema.pre('find', function async(next) {
    const fieldMap = new Map<string, boolean>();
    fieldMap.delete('_id');
    fieldMap.set('userName', true);
    fieldMap.set('fullName', true);
    fieldMap.set('age', true);
    fieldMap.set('address', true);
    const fieldsToSelect = Array.from(fieldMap.keys()).join(' ');
    this.select(fieldsToSelect);
    next()
})

// userSchema.post('find', function (doc, next) {
//  console.log(this,"post data");
//     next()
// })




export const UserModel = model<User>('User', userSchema); 