

export type userAddress = {
    street: string,
    city: string,
    country: string,
    _id: boolean
}
export type userFullName = {
    firstName: string,
    lastName: string,
    _id: boolean
}


export type userOrder = {
    productName: string,
    price: number,
    quantity: number,
    _id: boolean
}

export type User = {
    userId: number,
    userName: string,
    password: string,
    fullName: userFullName,
    age: number,
    email: string,
    isActive: boolean,
    hobbies: "reading" | "summing" | "journey",
    address: userAddress,
    order: userOrder
}



