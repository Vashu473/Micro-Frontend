import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Product from "./Products";
const App = () => (
  <div>
    <Product />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
