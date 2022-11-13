import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { LocationCard } from "../../components/Card";
import locationService from "../../services/locations.service";

const LocationsPage = () => {
  const [locations, setLocations] = useState([]);
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
    locationService
      .getAllLocations()
      .then((locations) => {
        setLocations(locations.data.results);
        setInfo(locations.data.info);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    locationService
      .changePage(page)
      .then((locations) => {
        setLocations(locations.data.results);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
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
          <h2 className="text-center my-4">Locations</h2>
          <div className="flex flex-wrap flex-row justify-center items-stretch gap-4">
            {locations.map((character, index) => {
              return <LocationCard key={new Date() * index} {...character} />;
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

export default LocationsPage;
