import { LoginUserDTO } from './authenticationInterface';
import { UserService } from '../users';
import { jwt } from '../../helpers';

export class AuthenticationService {
  static async login(params: LoginUserDTO) {
    const user = await UserService.authenticateUser(params.username, params.password);
    const payload = {
      userId: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    };
    const token = await jwt.sign(payload);

    return { ...payload, token };
  }
}
