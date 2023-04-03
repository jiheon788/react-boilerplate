import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DynamicRoutes from './DynamicRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <DynamicRoutes />
    </BrowserRouter>
  );
};

export default App;
