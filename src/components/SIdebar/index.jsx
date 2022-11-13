import React from "react";
import { Link } from "react-router-dom";
import rickAndMorty from "../../assets/rick-morty.png";
import { FaUser, FaGlobeAfrica, FaTv } from "react-icons/fa";
import * as ROUTES from "../../constants/routes";

const Sidebar = () => {
  return (
    <div className="w-1/6 fixed top-0 left-0 h-screen bg-gray-200 flex flex-col">
      <div className="flex flex-col items-center">
        <Link to={ROUTES.HOME}>
          <img
            className="w-40"
            src={rickAndMorty}
            alt="Rick and Morty"
            loading="lazy"
          />
        </Link>
        <h1 className="text-lg">Rick and Morty</h1>
      </div>
      <nav className="mt-5">
        <Link
          to={ROUTES.CHARACTERS}
          className="flex flex-row items-center hover:text-white hover:bg-green-700 gap-2 px-4 py-2"
        >
          <FaUser />
          <p>Characters</p>
        </Link>
        <Link
          to={ROUTES.LOCATIONS}
          className="flex flex-row items-center hover:text-white hover:bg-green-700 gap-2 px-4 py-2"
        >
          <FaGlobeAfrica />
          <p>Locations</p>
        </Link>
        <Link
          to={ROUTES.EPISODES}
          className="flex flex-row items-center hover:text-white hover:bg-green-700 gap-2 px-4 py-2"
        >
          <FaTv />
          <p>Episodes</p>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
