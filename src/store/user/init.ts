import { getAccessToken } from 'store/token';
import { postLogin, postLogout, postRegistration } from 'store/auth';
import { decodeAccessToken } from 'utils/decodeAccessToken';

import { $user } from './state';

$user.on(getAccessToken.doneData, (_, v) => decodeAccessToken(v));
$user.on(postLogin.doneData, (_, v) => decodeAccessToken(v));
$user.on(postRegistration.doneData, (_, v) => decodeAccessToken(v));
$user.on(postLogout.doneData, () => null);

$user.watch(console.log);
