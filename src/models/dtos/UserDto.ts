import { AccessToken } from '../AccessToken';

export default class UserDto {
  email;
  id;
  emailConfirmed;

  constructor(model: AccessToken) {
    this.email = model.email;
    this.id = model.id;
    this.emailConfirmed = model.emailConfirmed;
  }
}
