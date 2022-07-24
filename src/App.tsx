import React from 'react';
import './App.css';
import Header from "./header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./header/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Outlet />
        <Footer />
    </div>
  );
}

export default App;
