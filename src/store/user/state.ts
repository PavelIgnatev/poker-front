import UserDto from 'models/dtos/UserDto';
import { createStore } from 'effector';

export const $user = createStore<UserDto | null>(null);
