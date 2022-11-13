import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CharacterCard } from "../../components/Card";
import charactersService from "../../services/characters.service";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const [info, setInfo] = useState({});

  const nextPage = () => {
    setPage((page) => page + 1);
  };
  const prevPage = () => {
    setPage((page) => page - 1);
  };

  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    charactersService
      .getAllCharacters()
      .then((characters) => {
        setCharacters(characters.data.results);
        setInfo(characters.data.info);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 10000);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    charactersService
      .changePage(page)
      .then((characters) => {
        setCharacters(characters.data.results);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 10000);
      });
  }, [page]);

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
          <h2 className="text-center my-4">Characters</h2>
          <div className="flex flex-wrap flex-row justify-center items-stretch gap-4">
            {characters.map((character, index) => {
              return <CharacterCard key={new Date() * index} {...character} />;
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
      )}
    </>
  );
};

export default Characters;
