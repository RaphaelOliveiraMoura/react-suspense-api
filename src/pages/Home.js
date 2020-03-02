import React, { useState } from 'react';

import api from '../services/api';

let usersResource = api.fetchUsers();

export default function Home() {
  const [filter, setFilter] = useState('');

  const [err, users] = usersResource.read(filter);

  function handleIputChange(e) {
    setFilter(e.target.value);
    usersResource = api.fetchUsers();
  }

  if (err) {
    return <div>Deu erro</div>;
  }

  return (
    <>
      <input type="text" value={filter} onChange={handleIputChange} />

      <div>Hello Suspense API -> {users[0].name}</div>
    </>
  );
}
