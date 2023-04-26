import connection from "./connection";
import IUser from "../interfaces/users.interfaces";

const getAll = async (): Promise<IUser[]> => {
  const [rows] = await connection.execute(`
    SELECT * FROM Users;
  `);
  return rows as IUser[];
  // return rows as { id:number, name:string, email:string, password:string }[];
};

const getById = async (id: number): Promise<IUser | null> => {
  const query = 'SELECT * FROM Users WHERE id = ?';
  const values = [id];

  const [data] = await connection.execute(query, values);
  const [user] = data as IUser[];

  return user || null;
};

const getByEmail = async (email: string): Promise<IUser | null> => {
  const query = 'SELECT * FROM Users WHERE email = ?';
  const values = [email];

  const [data] = await connection.execute(query, values);
  const [user] = data as IUser[];

  return user || null;
};

const createUser = async (user: IUser) => {
  const [result] = await connection.execute('', []);
  return result;
};

export default { getAll, getById, createUser, getByEmail };
