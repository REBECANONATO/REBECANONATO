import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./global.css";

import Main from './main/Main';

function App() {
  return (
    <>
      <Router>
        <Main />
      </Router>
    </>
  );
}

export default App;
