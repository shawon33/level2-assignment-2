import { Schema, model, connect } from 'mongoose';

export type User = {
    id: number,
    userName: string,
    password: string,
    fullName: {
        firstName: string,
        lastName: string,
    },
    age: number,
    email: string,
    isActive: boolean,
    hobbies: "reading" | "summing" | "journey",
    address: {
        street: string,
        city: string,
        country: string
    },
    order: {
        productName: string,
        price: number,
        quantity: number
    }
}

