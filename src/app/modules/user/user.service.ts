import { UserModel } from "../user.model";
import { User } from "./user.interface";

const createUserIntoDB = async (user: User): Promise<User> => {
  const result = await UserModel.create(user);
  return result;
}

const getAllUser = async () => {
  const result = await UserModel.find();
  return result;
}


const getSingleUser = async (userId: number): Promise<User | null> => {
  const result = await UserModel.findOne({ userId })
  return result;
}


const deleteSingleUser = async (userId: number): Promise<User | null> => {
  const result = await UserModel.deleteOne({userId})
  return result;
  
}



export const UserServices = {
  createUserIntoDB,
  getAllUser,
  getSingleUser,
  deleteSingleUser
}