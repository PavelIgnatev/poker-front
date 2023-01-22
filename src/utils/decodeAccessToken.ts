import jwtDecode from 'jwt-decode';
import UserDto from 'models/dtos/UserDto';
import { AccessToken } from 'models/AccessToken';

export const decodeAccessToken = (accessToken: string) => {
  const decodedJwtToken = jwtDecode<AccessToken>(accessToken);

  return new UserDto(decodedJwtToken);
};
