import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { CharacterCard } from '../../components/Card';
import charactersService from '../../services/characters.service';

const Characters = () => {

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const [info, setInfo] = useState({});

  const nextPage = () => { setPage(page => page + 1)};
  const prevPage = () => { setPage(page => page - 1)};

  useEffect(() => {
    charactersService
      .getAllCharacters()
      .then((characters) => { 
        setCharacters(characters.data.results);
        setInfo(characters.data.info);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    charactersService
      .changePage(page)
      .then((characters) => { 
        setCharacters(characters.data.results);
      })
      .catch(error => console.error(error));
  }, [page]);

  return (
   <div>
    <h2 className='text-center my-4'>Characters</h2>
    <div className='flex flex-wrap flex-row justify-center items-stretch gap-4'>
      {
        characters.map((character, index) => {
          return <CharacterCard key={new Date() * index} {...character} />
        })
      }
      
    </div>
    <div className='py-6 flex flex-row justify-between items-center'>
      <button onClick={prevPage}>Précédent</button>
      <p>{page} / {info.pages}</p>
      <button onClick={nextPage}>Suivant</button>
    </div>
   </div>
  )
}

export default Characters;