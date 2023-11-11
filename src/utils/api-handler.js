// import { enqueueSnackbar } from 'notistack';

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
  console.log(err.message);
  // enqueueSnackbar(err.message);
};
