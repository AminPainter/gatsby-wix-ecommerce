import { enqueueSnackbar } from 'notistack';

const apiHandler = fn => {
  return async (...rest) => {
    try {
      return await fn(...rest);
    } catch (error) {
      handleApi(error);
    }
  };
};

export default apiHandler;

export const handleApi = err => {
  let error = err;

  if (err.name === 'InvalidStateError')
    error = new Error('Please let the previous share get completed.');
  else if (
    err?.details?.applicationError?.code === 'BACK_IN_STOCK_NOTIFICATION_REQUEST_ALREADY_EXISTS'
  )
    error = new Error('Your request has already been received.');

  enqueueSnackbar(error.message);
};
