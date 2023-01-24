import { createEffect } from 'effector';
import AuthService from 'api/service/AuthService';

export const postLogin = createEffect(
  async ({ email, password }: { email: string; password: string }) => {
    const {
      data: { accessToken },
    } = await AuthService.login(email, password);

    return accessToken;
  },
);

export const postRegistration = createEffect(
  async ({ email, password }: { email: string; password: string }) => {
    const {
      data: { accessToken },
    } = await AuthService.registration(email, password);

    return accessToken;
  },
);

export const postRecovery = createEffect(async ({ email }: { email: string }) => {
  const {
    data: { accessToken },
  } = await AuthService.recovery(email);

  return accessToken;
});

export const postLogout = createEffect(async () => {
  await AuthService.logout();

  return null;
});
