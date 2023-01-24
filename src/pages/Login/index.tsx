import React, { useCallback } from 'react';
import Login from 'components/LoginForm';
import { postLogin } from 'store/auth';

import classes from './index.module.scss';

type fieldsValues = { email: string; password: string };

const LoginPage = () => {
  const handleLoginFinish = useCallback((values: fieldsValues) => postLogin(values), []);

  return (
    <div className={classes.LoginPage}>
      <Login onFinish={handleLoginFinish} />
    </div>
  );
};

export default LoginPage;
