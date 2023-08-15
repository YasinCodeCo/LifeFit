import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
{/* <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script> */}

root.render(
  <React.StrictMode>

  <BrowserRouter>

  <App/>
  
  </BrowserRouter>

  </React.StrictMode>
);


reportWebVitals();
