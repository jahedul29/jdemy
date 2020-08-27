import React from "react";
import logo from "./logo.png";
import "./App.css";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header logo={logo}></Header>
      <Shop></Shop>
      <Footer></Footer>
    </div>
  );
}

export default App;
