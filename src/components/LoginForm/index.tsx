import React, { useCallback, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Button, Form, Input, notification } from 'antd';
import { Rule } from 'rc-field-form/lib/interface';

import classes from './index.module.scss';

interface LoginFormProps {
  onFinish: (values: { email: string; password: string }) => void;
}

const LoginForm = (props: LoginFormProps) => {
  const { onFinish } = props;

  const intl = useIntl();

  const labelEmail = useMemo(() => intl.formatMessage({ id: 'login-form.email.label' }), [intl]);
  const labelPassword = useMemo(
    () => intl.formatMessage({ id: 'login-form.password.label' }),
    [intl],
  );
  const messageEmailInvalid = useMemo(
    () => intl.formatMessage({ id: 'login-form.email.invalid' }),
    [intl],
  );
  const messagePasswordInvalid = useMemo(
    () => intl.formatMessage({ id: 'login-form.password.invalid' }),
    [intl],
  );
  const messageEmailRequired = useMemo(
    () => intl.formatMessage({ id: 'login-form.email.required' }),
    [intl],
  );
  const messagePasswordRequired = useMemo(
    () => intl.formatMessage({ id: 'login-form.password.required' }),
    [intl],
  );
  const finishFailedMessage = useMemo(
    () => intl.formatMessage({ id: 'login-form.finish.failed.message' }),
    [intl],
  );
  const finishFailedDescription = useMemo(
    () => intl.formatMessage({ id: 'login-form.finish.failed.description' }),
    [intl],
  );
  const emailRules = useMemo(
    () =>
      [
        {
          type: 'email',
          message: messageEmailInvalid,
        },
        {
          required: true,
          message: messageEmailRequired,
        },
      ] as Rule[],
    [messageEmailInvalid, messageEmailRequired],
  );
  const passwordRules = useMemo(
    () => [
      { min: 6, max: 32, message: messagePasswordInvalid },
      {
        required: true,
        message: messagePasswordRequired,
      },
    ],
    [messagePasswordRequired, messagePasswordInvalid],
  );

  const handleFinishFailed = useCallback(() => {
    notification.error({ message: finishFailedMessage, description: finishFailedDescription });
  }, [finishFailedMessage, finishFailedDescription]);

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      className={classes.form}
      onFinish={onFinish}
      onFinishFailed={handleFinishFailed}
      autoComplete="off"
    >
      <Form.Item label={labelEmail} name="email" rules={emailRules}>
        <Input />
      </Form.Item>
      <Form.Item label={labelPassword} name="password" rules={passwordRules}>
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          <FormattedMessage id="login-form.button" />
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
