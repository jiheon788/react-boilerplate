import React from 'react';
import GlobalStyle from '@/styles/GlobalStyle';
import Router from './Router';
import NavBar from '@/components/NavBar/index';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
