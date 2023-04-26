import { Request, Response } from 'express';
import UserService from "../services/users.service";
import { UserCredentials } from "../interfaces";

const getAll = async (_req: Request, res: Response) => {
  const result = await UserService.getAll();
  return res.status(200).json(result);
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status, data, error } = await UserService.getById(Number(id));

  return error
    ? res.status(status).json(error)
    : res.status(status).json(data);
};

const login = async (req: Request, res: Response) => {
  const userCredentials = req.body as UserCredentials;
  const { status, data, error } = await UserService.login(userCredentials);

  return error
    ? res.status(status).json({ error })
    : res.status(status).json(data);
};

export default { getAll, getById, login };
