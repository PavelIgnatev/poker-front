import React, { useCallback } from 'react';
import SignUpForm from 'components/SignUpForm';
import { postRegistration } from 'store/auth';

import classes from './index.module.scss';

type fieldsValues = { email: string; password: string };

const SignUpPage = () => {
  const handleSignUpFinish = useCallback((values: fieldsValues) => postRegistration(values), []);

  return (
    <div className={classes.SignUpPage}>
      <SignUpForm onFinish={handleSignUpFinish} />
    </div>
  );
};

export default SignUpPage;
