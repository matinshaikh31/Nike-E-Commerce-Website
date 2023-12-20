import React from "react";
import { Cart, FlexContent, Footer, Hero, NavBar, Sales, Stroies } from "./components";
import {
  heroapi,
  toprateslaes,
  popularsales,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";

const App = () => {
  return (
    <div>
    <NavBar/>
    <Cart/>
      <main className="flex flex-col gap-24">
      
        <Hero heroapi={heroapi} />
        <Sales endPoint={popularsales} ifExists />
        <FlexContent endPoint={highlight} ifExists />
        <Sales endPoint={toprateslaes} />
        <FlexContent endPoint={sneaker} />
        <Stroies story={story} />
        <Footer footerAPI={footerAPI}/>
       
      </main>
    </div>
  );
};

export default App;
