import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { EpisodeCard } from "../../components/Card";
import episodeService from "../../services/episodes.service";

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);

  const [info, setInfo] = useState({});

  const nextPage = () => {
    setPage((page) => page + 1);
  };
  const prevPage = () => {
    setPage((page) => page - 1);
  };

  useEffect(() => {
    episodeService
      .getAllEpisodes()
      .then((episodes) => {
        setEpisodes(episodes.data.results);
        setInfo(episodes.data.info);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    episodeService
      .changePage(page)
      .then((episodes) => {
        setEpisodes(episodes.data.results);
      })
      .catch((error) => console.error(error));
  }, [page]);

  return (
    <div>
      <h2 className="text-center my-4">Episodes</h2>
      <div className="flex flex-wrap flex-row justify-center items-stretch gap-4">
        {episodes.map((character, index) => {
          return <EpisodeCard key={new Date() * index} {...character} />;
        })}
      </div>
      <div className="py-6 flex flex-row justify-between items-center">
        <button onClick={prevPage}>Précédent</button>
        <p>
          {page} / {info.pages}
        </p>
        <button onClick={nextPage}>Suivant</button>
      </div>
    </div>
  );
};

export default EpisodesPage;
