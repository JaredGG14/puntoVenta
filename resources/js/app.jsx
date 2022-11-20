import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('application'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
      <App>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);