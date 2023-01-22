import { LOCALES } from './locales';

export const messages = {
  [LOCALES.ENGLISH]: {
    'login-form.button': 'Login',
    'login-form.email.label': 'Email',
    'login-form.password.label': 'Password',
    'login-form.email.required': 'The field must be filled in',
    'login-form.password.required': 'The field must be filled in',
    'login-form.email.invalid': 'Incorrect email format',
    'login-form.password.invalid': 'At least 6 and no more than 32 characters',
    'login-form.finish.failed.message': 'An error has occurred',
    'login-form.finish.failed.description': 'Please check the validity of all filled in fields',
  },
  [LOCALES.RUSSIAN]: {
    'login-form.button': 'Войти',
    'login-form.email.label': 'Почта',
    'login-form.password.label': 'Пароль',
    'login-form.email.required': 'Поле обязательно к заполнению',
    'login-form.password.required': 'Поле обязательно к заполнению',
    'login-form.email.invalid': 'Невалидный формат почты',
    'login-form.password.invalid': 'Не менее 6 и не более 32-х символов',
    'login-form.finish.failed.message': 'Произошла ошибка',
    'login-form.finish.failed.description':
      'Пожалуйста, проверьте валидность всех заполненных полей',
  },
};
