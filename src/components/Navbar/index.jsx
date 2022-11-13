import React from "react";
import { FaGlobeAfrica, FaTv, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import rickAndMorty from "../../assets/rick-morty.png";

const Navbar = () => {
  return (
    <div className="bg-gray-200 flex flex-col items-center md:hidden">
      <div className="flex flex-col items-center">
        <Link to={ROUTES.HOME}>
          <img
            className="w-24"
            src={rickAndMorty}
            alt="Rick and Morty"
            loading="lazy"
          />
        </Link>
        <h1 className="text-lg my-3">Rick and Morty</h1>
      </div>
      <nav className="flex flex-row justify-center items-center">
        <Link
          to={ROUTES.CHARACTERS}
          className="flex flex-row items-center hover:text-white hover:bg-green-700 gap-x-2 px-4 py-2"
        >
          <FaUser />
          <p>Characters</p>
        </Link>
        <Link
          to={ROUTES.LOCATIONS}
          className="flex flex-row items-center hover:text-white hover:bg-green-700 gap-x-2 px-4 py-2"
        >
          <FaGlobeAfrica />
          <p>Locations</p>
        </Link>
        <Link
          to={ROUTES.EPISODES}
          className="flex flex-row items-center hover:text-white hover:bg-green-700 gap-x-2 px-4 py-2"
        >
          <FaTv />
          <p>Episodes</p>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
