import React from 'react';
import './scss/style.scss';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router/Router';

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App;
