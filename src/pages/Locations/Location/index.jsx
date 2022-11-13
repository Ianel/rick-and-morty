import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CharacterCard } from "../../../components/Card";
import charactersService from "../../../services/characters.service";
import locationsService from "../../../services/locations.service";

const LocationPage = () => {
  const { id } = useParams();
  const [location, setLocation] = useState({});
  const [residents, setResidents] = useState([]);

  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    locationsService
      .getSingleLocation(id)
      .then((location) => {
        setLocation(location.data);
        console.log(location.data);

        const residentsURL = location.data.residents
          ? location.data.residents.map((url) => url.split("/")[5])
          : null;

        charactersService
          .getMultipleCharacters(residentsURL)
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
          <h1 className="font-bold text-2xl text-center">
            Name: {location.name}
          </h1>
          <div className="flex flex-row justify-around items-center">
            <h3>
              Type: <span className="font-bold">{location.type}</span>
            </h3>
            <h3>
              From: <span className="font-bold">{location.dimension}</span>
            </h3>
          </div>
          <h3 className="my-4 text-lg font-bold text-center">
            The Residents in this dimension
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

export default LocationPage;
