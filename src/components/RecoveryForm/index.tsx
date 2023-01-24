import React, { useCallback, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Button, Form, Input, notification } from 'antd';
import { Link } from 'react-router-dom';
import { Rule } from 'rc-field-form/lib/interface';

import classes from './index.module.scss';

interface RecoveryFormProps {
  onFinish: (values: { email: string }) => void;
}

const RecoveryForm = (props: RecoveryFormProps) => {
  const { onFinish } = props;

  const intl = useIntl();

  const labelEmail = useMemo(() => intl.formatMessage({ id: 'recovery-form.email.label' }), [intl]);
  const messageEmailInvalid = useMemo(
    () => intl.formatMessage({ id: 'recovery-form.email.invalid' }),
    [intl],
  );
  const messageEmailRequired = useMemo(
    () => intl.formatMessage({ id: 'recovery-form.email.required' }),
    [intl],
  );
  const finishFailedMessage = useMemo(
    () => intl.formatMessage({ id: 'recovery-form.finish.failed.message' }),
    [intl],
  );
  const finishFailedDescription = useMemo(
    () => intl.formatMessage({ id: 'recovery-form.finish.failed.description' }),
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
      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          <FormattedMessage id="recovery-form.button" />
        </Button>
        <Button type="ghost" className={classes.button}>
          <Link to="/login">
            <FormattedMessage id="recovery-form.button.link" />
          </Link>
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RecoveryForm;
