import React, { useCallback, useMemo } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { Link } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { Rule, RuleObject } from 'antd/es/form';
import { StoreValue } from 'antd/es/form/interface';

import classes from './index.module.scss';

interface SignUpFormProps {
  onFinish: (values: { email: string; password: string }) => void;
}

const SignUpForm = (props: SignUpFormProps) => {
  const { onFinish } = props;

  const intl = useIntl();
  const [form] = Form.useForm();

  const labelEmail = useMemo(
    () => intl.formatMessage({ id: 'registration-form.email.label' }),
    [intl],
  );
  const labelPassword = useMemo(
    () => intl.formatMessage({ id: 'registration-form.password.label' }),
    [intl],
  );
  const labelComfirmPassword = useMemo(
    () => intl.formatMessage({ id: 'registration-form.password.confirm.label' }),
    [intl],
  );
  const messageEmailInvalid = useMemo(
    () => intl.formatMessage({ id: 'registration-form.email.invalid' }),
    [intl],
  );
  const messagePasswordInvalid = useMemo(
    () => intl.formatMessage({ id: 'registration-form.password.invalid' }),
    [intl],
  );
  const messageConfirmPasswordInvalid = useMemo(
    () => intl.formatMessage({ id: 'registration-form.password.confirm.invalid' }),
    [intl],
  );
  const messageEmailRequired = useMemo(
    () => intl.formatMessage({ id: 'registration-form.email.required' }),
    [intl],
  );
  const messagePasswordRequired = useMemo(
    () => intl.formatMessage({ id: 'registration-form.password.required' }),
    [intl],
  );
  const finishFailedMessage = useMemo(
    () => intl.formatMessage({ id: 'registration-form.finish.failed.message' }),
    [intl],
  );
  const finishFailedDescription = useMemo(
    () => intl.formatMessage({ id: 'registration-form.finish.failed.description' }),
    [intl],
  );
  const emailRules = useMemo(
    () => [
      {
        type: 'email',
        message: messageEmailInvalid,
      },
      {
        required: true,
        message: messageEmailRequired,
      },
    ],
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

  const conformPasswordValidator = useCallback(
    (_: RuleObject, value: StoreValue, callback: (error?: string) => void) => {
      if (value !== form.getFieldValue('password')) {
        callback(messageConfirmPasswordInvalid);
      } else {
        callback();
      }
    },
    [form, messageConfirmPasswordInvalid],
  );

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      form={form}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={handleFinishFailed}
      className={classes.form}
    >
      <Form.Item label={labelEmail} name="email" rules={emailRules as Rule[]}>
        <Input />
      </Form.Item>

      <Form.Item label={labelPassword} name="password" rules={passwordRules}>
        <Input.Password />
      </Form.Item>

      <Form.Item
        label={labelComfirmPassword}
        name="confirm"
        dependencies={['password']}
        rules={[...passwordRules, { validator: conformPasswordValidator }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          <FormattedMessage id="registration-form.button" />
        </Button>
        <Button type="ghost" className={classes.button}>
          <Link to="/login">
            <FormattedMessage id="registration-form.button.link" />
          </Link>
        </Button>
      </Form.Item>
    </Form>
  );
};
export default SignUpForm;
