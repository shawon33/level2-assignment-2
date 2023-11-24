import { UserModel } from "../user.model";
import { User } from "./user.interface";

const createUserIntoDB = async (user:User)=>{
  const result =   await UserModel.create(user);
  return result;
}

const getAllUser = async()=>{
  const result = await UserModel.find();
  return result;
}



export const UserServices = {
    createUserIntoDB,
    getAllUser
}