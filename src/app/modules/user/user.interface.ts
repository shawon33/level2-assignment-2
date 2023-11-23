

export type userAddress = {
    street: string,
    city: string,
    country: string
}
export type userFullName = {
    firstName: string,
    lastName: string,
}


export type userOrder = {
    productName: string,
    price: number,
    quantity: number
}

export type User = {
    id: number,
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



