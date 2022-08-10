import "./App.scss";

import { About, Footer, Header, Photography, Skills, Work } from "./container";

import { Navbar } from "./components";
import React from "react";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      Header
      <Header />
      <About />
      <Work />
      <Skills />
      <Photography />
      <Footer />
    </div>
  );
};

export default App;
