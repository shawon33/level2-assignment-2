import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    try {

        const  user  = req.body;
        console.log(user,"ame controller thakey");
        const result = await UserServices.createUserIntoDB(user);
        res.status(200).json({
            success: true,
            message: "user created successfully",
            data: result
        })

    } catch (error: any) {
        console.log(error,'ame controller error');
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong",
            error: error
        })
    }
}



const getALLUser = async (req: Request, res: Response) => {
    try {
        const result = await UserServices.getAllUser()
        res.status(200).json({
            success: true,
            message: "All user showed successfully",
            data: result
        })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong",
            error: error
        })

    }
}



const getSingleUser = async (req: Request, res: Response) => {
    try {
        const userId: number = parseInt(req.params.id)
        const result = await UserServices.getSingleUser(userId);
        if (result) {
            res.status(200).json({
                success: true,
                message: "single User showed successfully",
                data: result
            })
        } else {
            res.status(500).json({
                success: false,
                message: 'User not found',
                data: null,
            });
        }

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "something went wrong",
            error: error
        })

    }
}

const deleteUser = async (req: Request, res: Response) => {
    try {
        const userId: number = parseInt(req.params.id)
        const result = await UserServices.deleteSingleUser(userId);
        if (result) {
            res.status(200).json({
                success: true,
                message: "user deleted successfully",
                data: result
            })
        } else {
            res.status(500).json({
                success: false,
                message: 'User not found',
                data: null,
            });
        }

    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: error.message || 'Something went wrong',
            error: error
        })
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {
        const userData = req.body
        console.log(userData);
        const userId: number = parseInt(req.params.id)
        const result = await UserServices.updateUserInfo(userId, userData)
        res.status(200).json({
            status: 'success',
            message: 'User updated successfully',
            data: result,
        })
    } catch (error: any) {
        console.log(error)
        res.status(500).json({
            status: 'fail',
            message: error.message || 'Something went wrong',
        })
    }
}


const updateUserOrder = async (req: Request, res: Response) => {
    try {
        const userData = req.body.order
        console.log(userData);
        const userId: number = parseInt(req.params.id)
        const result = await UserServices.updateOrderInfo(userId, userData)
        res.status(200).json({
            status: 'success',
            message: 'User order updated successfully',
            data: result,
        })
    } catch (error: any) {
        console.log(error)
        res.status(500).json({
            status: 'fail',
            message: error.message || 'Something went wrong',
        })
    }
}


export const UserController = {
    createUser,
    getALLUser,
    getSingleUser,
    updateUser,
    updateUserOrder,
    deleteUser

}