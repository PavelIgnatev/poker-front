import React, { useCallback } from 'react';
import RecoveryForm from 'components/RecoveryForm';
import { postRecovery } from 'store/auth';

import classes from './index.module.scss';

type fieldsValues = { email: string };

const RecoveryPage = () => {
  const handleRecoveryFinish = useCallback((values: fieldsValues) => postRecovery(values), []);

  return (
    <div className={classes.RecoveryPage}>
      <RecoveryForm onFinish={handleRecoveryFinish} />
    </div>
  );
};

export default RecoveryPage;
