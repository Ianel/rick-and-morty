import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

export const CharacterCard = ({ id, image, name }) => {
  return (
    <Link to={`${ROUTES.CHARACTERS}/${id}`}>
      <img src={image} alt={name} loading="lazy" />
    </Link>
  );
};

export const LocationCard = ({ id, name, type, dimension }) => {
  return (
    <Link
      to={`${ROUTES.LOCATIONS}/${id}`}
      className="w-64 h-64 even:bg-green-200 odd:bg-blue-200 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 shadow-lg flex flex-col justify-center items-center"
    >
      <h1 className="text-center">{name}</h1>
      <h3>Type: {type}</h3>
      <h4 className="text-center">Dimension: {dimension}</h4>
    </Link>
  );
};

export const EpisodeCard = ({ id, name, air_date, episode }) => {
  return (
    <Link
      to={`${ROUTES.EPISODES}/${id}`}
      className="w-64 h-64 even:bg-purple-200 odd:bg-red-200 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 shadow-lg flex flex-col justify-center items-center"
    >
      <h1 className="text-center">{name}</h1>
      <h3>Air Date: {air_date}</h3>
      <h4 className="text-center">Episode: {episode}</h4>
    </Link>
  );
};
