import React from "react";
import hero from "../../assets/hero.jpeg";

const HomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <img
        className="h-full object-cover"
        src={hero}
        alt="Rick and Morty"
        loading="lazy"
      />
    </div>
  );
};

export default HomePage;
