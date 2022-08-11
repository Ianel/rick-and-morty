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
  }, []);

  return (
    <>
      {loading ? (
        <p className="flex justify-center items-center text-2xl text-teal-500 font-bold">
          Loading.....
        </p>
      ) : (
        <div>
          <h1>{location.name}</h1>
          <h3>{location.type}</h3>
          <h3>{location.dimension}</h3>
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
