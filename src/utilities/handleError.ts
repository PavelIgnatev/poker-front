import { notification } from 'antd';

const handleError = (error: Error) => {
  notification.error({
    message: 'An error has occurred',
    description: error?.message || 'Please try again',
  });
  console.error(error);
};

export default handleError;
