import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CharacterCard } from "../../../components/Card";
import charactersService from "../../../services/characters.service";
import episodesService from "../../../services/episodes.service";

const EpisodePage = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState({});
  const [residents, setResidents] = useState([]);

  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    episodesService
      .getSingleEpisode(id)
      .then((episode) => {
        setEpisode(episode.data);
        console.log(episode.data);

        const charactersURL = episode.data.characters
          ? episode.data.characters.map((url) => url.split("/")[5])
          : null;

        charactersService
          .getMultipleCharacters(charactersURL)
          .then((allResident) => {
            setResidents(allResident.data);
            setIsLoading(false);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <>
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
          <h3 className="font-bold text-2xl text-center">
            Episode: <span>{episode.episode}</span>
          </h3>
          <div className="flex flex-row justify-around items-center">
            <h1>
              Name: <span className="font-bold">{episode.name}</span>
            </h1>
            <h3>
              Air Date: <span className="font-bold">{episode.air_date}</span>
            </h3>
          </div>
          <h3 className="my-4 text-lg font-bold text-center">
            The Characters in this episode
          </h3>
          <div className="mt-4 flex flex-row justify-evenly items-center flex-wrap">
            {residents.length > 1 ? (
              residents.map((resident, index) => {
                return <CharacterCard key={new Date() * index} {...resident} />;
              })
            ) : (
              <CharacterCard key={new Date() * 3.5} {...residents} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EpisodePage;
