import React from "react";
import About from "./About/page";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Skills from "./Skills/page";
import Contact from "./Contact/page";

function Page() {
  return (
    <div className="parentPage">
      <Header />
      <div id="Home"><Home /></div>
      <div id="About"><About /></div>
      <Skills />
      <div id="Contact"><Contact /></div>
    </div>
  );
}

export default Page;
