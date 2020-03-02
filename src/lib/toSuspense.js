const PENDING = 'pending';
const SUCCESS = 'success';
const ERROR = 'error';

export default function toSuspense(promise) {
  const context = {
    status: PENDING,
    result: undefined
  };

  const suspender = promise.then(
    result => {
      context.status = SUCCESS;
      context.result = result;
    },
    err => {
      context.status = ERROR;
      context.result = err;
    }
  );

  return {
    read() {
      const { status, result } = context;

      if (status === PENDING) throw suspender;
      else if (status === ERROR) return [result, undefined];
      else if (status === SUCCESS) return [undefined, result];
    }
  };
}
