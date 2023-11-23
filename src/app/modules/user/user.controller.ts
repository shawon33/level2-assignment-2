import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    try {

        const user = req.body;
        const result = await UserServices.createUserIntoDB(user);
        res.status(200).json({
            success: true,
            message: "user created successfully",
            data: result
        })

    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong",
            error: error
        })
    }
}

export const UserController = {
    createUser
}