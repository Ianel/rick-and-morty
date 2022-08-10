import React from "react";
import hero from "../../assets/hero.jpeg";

const HomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <img className="h-full" src={hero} alt="Rick and Morty" />
      {/* <h1>Welcome to Rick And Morty Land</h1> */}
    </div>
  );
};

export default HomePage;
