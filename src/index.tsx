import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Modelos from './pages/Modelos/index';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Modelos/>
  </React.StrictMode>
);

