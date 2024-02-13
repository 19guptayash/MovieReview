import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Searchmain from "./Searchmain";
import Checkout from "./Checkout";
const Homemain = () => {
  return (
    <div>
      <Header />
      <Searchmain/>
      <Checkout/>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <Footer />
    </div>
  );
};

export default Homemain;
