import { createEffect } from 'effector';
import AuthService from 'api/service/AuthService';

export const getAccessToken = createEffect(async () => {
  const {
    data: { accessToken },
  } = await AuthService.refresh();

  return accessToken;
});
