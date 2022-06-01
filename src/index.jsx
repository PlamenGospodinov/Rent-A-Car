import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4200"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
