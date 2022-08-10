import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { LocationCard } from '../../components/Card';
import locationService from '../../services/locations.service';

const LocationsPage = () => {

  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(1);

  const [info, setInfo] = useState({});

  const nextPage = () => { setPage(page => page + 1)};
  const prevPage = () => { setPage(page => page - 1)};

  useEffect(() => {
    locationService
      .getAllLocations()
      .then((locations) => { 
        setLocations(locations.data.results);
        setInfo(locations.data.info);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    locationService
      .changePage(page)
      .then((locations) => { 
        setLocations(locations.data.results);
      })
      .catch(error => console.error(error));
  }, [page]);

  return (
   <div>
    <h2 className='text-center my-4'>Locations</h2>
    <div className='flex flex-wrap flex-row justify-center items-stretch gap-4'>
      {
        locations.map((character, index) => {
          return <LocationCard key={new Date() * index} {...character} />
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

export default LocationsPage;