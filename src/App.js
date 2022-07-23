import "./App.scss";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";

import { Navbar } from "./components";
import Photography from "../../backend_sanity/schemas/photography";
import React from "react";

const App = () => {
  return (
    <div className="app">
      <Navbar />
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
