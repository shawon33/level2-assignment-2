import { UserModel } from "../user.model";
import { User } from "./user.interface";

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
}

const getAllUser = async () => {
  const result = await UserModel.find();
  return result;
}


const getSingleUser = async (id: number) => {
  const result = await UserModel.findOne({ id });
  return result
}



export const UserServices = {
  createUserIntoDB,
  getAllUser,
  getSingleUser
}