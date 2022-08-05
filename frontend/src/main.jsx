import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//?Se elimina React.StrictMode, para que el useEffect se ejecute solo una vez
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
