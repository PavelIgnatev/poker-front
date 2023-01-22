import $api from 'api';
import { AxiosResponse } from 'axios';
import UserDto from 'models/dtos/UserDto';

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<UserDto[]>> {
    return $api.get<UserDto[]>('/users');
  }
}
