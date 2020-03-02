import React, { Suspense } from 'react';
import './App.css';

import Home from './pages/Home';

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Home />
    </Suspense>
  );
}

export default App;
