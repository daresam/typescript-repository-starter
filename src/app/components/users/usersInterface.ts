export interface CreateUserDTO {
  readonly first_name: string;
  readonly last_name: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
}

export interface UserProps {
  readonly _id?: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  active: boolean;
}

export interface GetAllUsersDTO {
  page: number;
  perPage: number;
  searchQuery?: string;
}

export interface GetOneUserDTO {
  id: number;
}

export interface ToggleUserStatusDTO {
  id: number;
  action: UserStatusActions;
}

export enum UserStatusActions {
  activate = 'activate',
  deactivate = 'deactivate',
}
