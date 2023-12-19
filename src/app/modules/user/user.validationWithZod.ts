import { z } from 'zod';


// Define Zod schema for userFullName
const userFullNameSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
});

// Define Zod schema for userAddress
const userAddressSchema = z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
});

// Define Zod schema for userOrder
const userOrderSchema = z.object({
    productName: z.string(),
    price: z.number(),
    quantity: z.number(),
});

// Define Zod schema for User
   const userValidationSchema = z.object({
    userId: z.number().min(1),
    username: z.string(),
    password: z.string().max(20),
    fullName: userFullNameSchema,
    age: z.number().positive("Age must be positive"),
    email: z.string().email("Invalid email format"),
    isActive: z.boolean().default(true),
    hobbies: z.enum(['reading', 'summing', 'journey']), // Change the type as needed
    address: userAddressSchema,
    order: userOrderSchema,
});

export default userValidationSchema