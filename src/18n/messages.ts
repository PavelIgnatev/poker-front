import { LOCALES } from './locales';

export const messages = {
  [LOCALES.ENGLISH]: {
    // login-form
    'login-form.button': 'Login',
    'login-form.button.link': 'Go to registration',
    'login-form.button.recovery.link': 'Go to recovery',
    'login-form.email.label': 'Email',
    'login-form.password.label': 'Password',
    'login-form.email.required': 'The field must be filled in',
    'login-form.password.required': 'The field must be filled in',
    'login-form.email.invalid': 'Incorrect email format',
    'login-form.password.invalid': 'At least 6 and no more than 32 characters',
    'login-form.finish.failed.message': 'An error has occurred',
    'login-form.finish.failed.description': 'Please check the validity of all filled in fields',
    // registration-form
    'registration-form.button': 'Register',
    'registration-form.button.link': 'Go to login',
    'registration-form.email.label': 'Email',
    'registration-form.password.label': 'Password',
    'registration-form.password.confirm.label': 'Confirm',
    'registration-form.email.required': 'The field must be filled in',
    'registration-form.password.required': 'The field must be filled in',
    'registration-form.email.invalid': 'Incorrect email format',
    'registration-form.password.invalid': 'At least 6 and no more than 32 characters',
    'registration-form.password.confirm.invalid': 'The repeated password was entered incorrectly',
    'registration-form.finish.failed.message': 'An error has occurred',
    'registration-form.finish.failed.description':
      'Please check the validity of all filled in fields',
    // recovery-form
    'recovery-form.button': 'Recovery',
    'recovery-form.button.link': 'Go to login',
    'recovery-form.email.label': 'Email',
    'recovery-form.email.required': 'The field must be filled in',
    'recovery-form.email.invalid': 'Incorrect email format',
    'recovery-form.finish.failed.message': 'An error has occurred',
    'recovery-form.finish.failed.description': 'Please check the validity of all filled in fields',
  },
  [LOCALES.RUSSIAN]: {
    //login-form
    'login-form.button': 'Войти',
    'login-form.button.link': 'Перейти к регистрации',
    'login-form.button.recovery.link': 'Восстановление пароля',
    'login-form.email.label': 'Почта',
    'login-form.password.label': 'Пароль',
    'login-form.email.required': 'Поле обязательно к заполнению',
    'login-form.password.required': 'Поле обязательно к заполнению',
    'login-form.email.invalid': 'Невалидный формат почты',
    'login-form.password.invalid': 'Не менее 6 и не более 32-х символов',
    'login-form.finish.failed.message': 'Произошла ошибка',
    'login-form.finish.failed.description':
      'Пожалуйста, проверьте валидность всех заполненных полей',
    // registration-form
    'registration-form.button': 'Зарегистрироваться',
    'registration-form.button.link': 'Перейти к авторизации',
    'registration-form.email.label': 'Почта',
    'registration-form.password.label': 'Пароль',
    'registration-form.password.confirm.label': 'Еще раз',
    'registration-form.email.required': 'Поле обязательно к заполнению',
    'registration-form.password.required': 'Поле обязательно к заполнению',
    'registration-form.email.invalid': 'Невалидный формат почты',
    'registration-form.password.invalid': 'Не менее 6 и не более 32-х символов',
    'registration-form.password.confirm.invalid': 'Пароли не совпадают',
    'registration-form.finish.failed.message': 'Произошла ошибка',
    'registration-form.finish.failed.description':
      'Пожалуйста, проверьте валидность всех заполненных полей',
    // recovery-form
    'recovery-form.button': 'Восстановить',
    'recovery-form.button.link': 'Перейти к авторизации',
    'recovery-form.email.label': 'Почта',
    'recovery-form.email.required': 'Невалидный формат почты',
    'recovery-form.email.invalid': 'Не менее 6 и не более 32-х символов',
    'recovery-form.finish.failed.message': 'Произошла ошибка',
    'recovery-form.finish.failed.description':
      'Пожалуйста, проверьте валидность всех заполненных полей',
  },
};
