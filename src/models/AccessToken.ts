export interface AccessToken {
  id: string;
  email: string;
  exp: number;
  iat: number;
  emailConfirmed: boolean;
}
