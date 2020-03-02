import toSuspense from '../lib/toSuspense';

const wait = (data, timeout) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(data), timeout));

export function fetchUsers() {
  const users = [{ name: 'Raphael', age: 20 }];
  return wait(users, 1000);
}

export default {
  fetchUsers: () => toSuspense(fetchUsers())
};
