import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import "./index.css";
const Product = React.lazy(() => import("products/List"));
const Comapany = React.lazy(() => import("company/List"));
const App = () => (
  <Router>
    <Header />
    <Suspense fallback={<div>...loading</div>}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/p" element={<Product name="vashu" />} />
        <Route exact path="/c" element={<Comapany />} />
      </Routes>
    </Suspense>
    <Footer />
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
