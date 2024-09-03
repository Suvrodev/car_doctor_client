import React from "react";
import Banner from "../Shared/Banner/Banner";
import About from "../About/About";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <div className="p-4 md:p-0">
        <Service></Service>
      </div>
    </div>
  );
};

export default Home;
