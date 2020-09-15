import bcrypt from 'bcryptjs';
import { User, knex } from '../../database';
import { UserProps, GetAllUsersDTO } from './usersInterface';

const PASSWORD_SALT_ROUNDS = 10;

export class UserRepository {
  static async getByEmail(email: string): Promise<UserProps | null> {
    return (User.query().where('email', email).first() as unknown) as UserProps;
  }

  static async getByUsername(username: string): Promise<UserProps | null> {
    return (User.query().where('username', username).first() as unknown) as UserProps;
  }

  static async getOne(userId: number): Promise<UserProps | null> {
    return (User.query().where('id', userId).first() as unknown) as UserProps;
  }

  static async create(user: UserProps) {
    const hashedPassword = await bcrypt.hash(user.password, PASSWORD_SALT_ROUNDS);
    return User.query().insertAndFetch({ ...user, password: hashedPassword });
  }

  static async getAll(params: GetAllUsersDTO) {
    return User.query().page(params.page - 1, params.perPage);
  }

  static async activate(userId: number) {
    return User.query().patchAndFetchById(userId, { active: true });
  }

  static async deactivate(userId: number) {
    return User.query().patchAndFetchById(userId, { active: false });
  }
}
