import * as React from "react";
import App from "./App";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import ErrorPage from "./error-page";
import Deals from "./Pages/Deals";
import WhatsNew from "./Pages/WhatsNew";
import Delivery from "./Pages/Delivery";
import Account from "./Pages/Account";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/WhatsNew" element={<WhatsNew />} />
        <Route path="/Delivery" element={<Delivery />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Cart" element={<Cart />} /> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);