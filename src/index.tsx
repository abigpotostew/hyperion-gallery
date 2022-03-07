import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import TokenOne from "./routes/token-one";
import WalletRoute from "./routes/wallet-route";
import GalleryRoute from "./routes/gallery-route";
import AboutRoute from "./routes/about-route";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/token" element={<TokenOne />} />
        <Route path="/wallet" element={<WalletRoute />} />
        <Route path="/gallery" element={<GalleryRoute />} />
        <Route path="/about" element={<AboutRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
