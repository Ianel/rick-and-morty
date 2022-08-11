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
  }, []);

  return (
    <>
      {loading ? (
        <p className="flex justify-center items-center text-2xl text-teal-500 font-bold">
          Loading.....
        </p>
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
