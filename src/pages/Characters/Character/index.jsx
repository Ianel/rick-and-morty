import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import charactersService from "../../../services/characters.service";
import episodesService from "../../../services/episodes.service";
import * as ROUTES from "../../../constants/routes";
import { EpisodeCard } from "../../../components/Card";

const CharacterPage = () => {
  const [character, setCharacter] = useState({});
  const [episodes, setEpisodes] = useState([]);

  const [originURL, setOriginURL] = useState(0);
  const [locationURL, setLocationURL] = useState(0);

  const { id } = useParams();

  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    charactersService
      .getSingleCharacter(id)
      .then((singleCharacter) => {
        const originURL = singleCharacter.data.origin.url.split("/")[5];

        const locationURL = singleCharacter.data.location.url.split("/")[5];

        const episodeURL = singleCharacter.data.episode.map(
          (url) => url.split("/")[5]
        );

        episodesService
          .getMultipleEpisodes(episodeURL)
          .then((episode) => setEpisodes(episode.data));

        setOriginURL(originURL);

        setLocationURL(locationURL);

        setCharacter(singleCharacter.data);
        setIsLoading(false);
      })
      .catch((error) => console.error);
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="w-2/3 my-6 h-2 relative">
            <div className="rounded-md bg-gray-500 h-2 absolute z-0 w-full"></div>
            <div className="rounded-md bg-teal-500 h-2 absolute z-20 w-1/3 animate-slide"></div>
          </div>
          <p className="text-2xl text-teal-500 font-bold">Loading......</p>
        </div>
      ) : (
        <div>
          <div className="w-1/2 mx-auto shadow-lg flex flex-row">
            <img src={character.image} alt={character.name} loading="lazy" />
            <div className="p-4 leading-10">
              <h1 className="text-xl font-bold">
                {character.name ? character.name : "unknown"}
              </h1>
              <h3>
                Status:{" "}
                <span
                  className={`${
                    character.status === "Alive"
                      ? "text-green-500 font-bold"
                      : character.status === "Dead"
                      ? "text-red-500 font-bold"
                      : "text-blue-500 font-bold"
                  }`}
                >
                  {character.status ? character.status : "unknown"}
                </span>
              </h3>
              <h3>
                Species: {character.species ? character.species : "unknown"}
              </h3>
              <p>Type: {character.type ? character.type : "unknown"}</p>
              <p>Gender: {character.gender ? character.gender : "unknown"}</p>
              <p>
                Origin:{" "}
                <Link to={`${ROUTES.LOCATIONS}/${originURL}`}>
                  <span className="bg-blue-500 text-white p-2 rounded-sm">
                    {character.origin?.name ? character.origin.name : "unknown"}
                  </span>
                </Link>
              </p>
              <p>
                Location:{" "}
                <Link to={`${ROUTES.LOCATIONS}/${locationURL}`}>
                  <span className="bg-purple-500 text-white p-2 rounded-sm">
                    {character.location?.name
                      ? character.location.name
                      : "unknown"}
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <h3 className="my-4 text-lg font-bold text-center">
            The episodes starring this character
          </h3>
          <div className="flex flex-row justify-evenly items-center flex-wrap">
            {episodes.length > 1 ? (
              episodes.map((episode, index) => {
                return <EpisodeCard key={new Date() * index} {...episode} />;
              })
            ) : (
              <EpisodeCard key={new Date() * 2.5} {...episodes} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterPage;
