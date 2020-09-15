import { BaseModel } from './BaseModel';

export class User extends BaseModel {
  static tableName = 'users';

  readonly id: number;
  first_name: string;
  last_name: string;
  email: string;
  username?: string;
  active: boolean;
  password: string;

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['first_name', 'last_name', 'email'],
      properties: {
        id: { type: 'number' },
        first_name: { type: 'string' },
        last_name: { type: 'string' },
        email: { type: 'string' },
        username: { type: 'string' },
        password: { type: 'string' },
        active: { type: 'boolean' },
      },
    };
  }
}
