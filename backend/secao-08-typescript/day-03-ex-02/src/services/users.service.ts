import IUser from "../interfaces/users.interfaces";
import UserModel from "../models/users.model";
import { UserCredentials } from "../interfaces";

const MESSAGES = {
  USER_NOT_FOUND: 'User not found',
  UNAUTHORIZED: 'Invalid email or password',
  USER_EXISTS: 'User already exists',
  FORBIDDEN: 'You are not allowed to take this action',
};

const getAll = async (): Promise<IUser[]> => {
  const users = await UserModel.getAll();
  return users;
};

const getById = async (id: number) => {
  const data = await UserModel.getById(id);

  if (data === null) {
    return { status: 404, error: { message: MESSAGES.USER_NOT_FOUND } };
  }

  return { status: 200, data };
};

const login = async (userCredentials: UserCredentials) => {
  const data = await UserModel.getByEmail(userCredentials.email);

  if (data === null || data.password !== userCredentials.password) {
    return { status: 403, error: { message: MESSAGES.UNAUTHORIZED } };
  }
  return { status: 200, data: { token: 'fake token' } };
};

const createUser = async (user: IUser) => {
  const userCreated = await UserModel.createUser(user)
  return userCreated;
};

export default { getAll, getById, login, createUser };