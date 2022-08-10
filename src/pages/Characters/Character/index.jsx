import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { API_URL } from '../../../constants/url'
import charactersService from '../../../services/characters.service'
import * as ROUTES from "../../../constants/routes";

const CharacterPage = () => {

    const [character, setCharacter] = useState({});
    const [episodes, setEpisodes] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        charactersService
            .getSingleCharacter(id)
            .then((singleCharacter) => {
                console.log(singleCharacter);
                setCharacter(singleCharacter.data);

                setEpisodes(singleCharacter.data.episode);
            })
            .catch((error) => console.error)
    }, []);

  return (
    <div>
        <img src={character.image} alt="" /> 
        <h1>{character.name ? character.name: "unknown"}</h1>
        <h3>Status: {character.status ? character.status : "unknown"}</h3>
        <h3>Species: {character.species ? character.species : "unknown"}</h3>
        <p>Type: {character.type ? character.type : "unknown"}</p>
        <p>Gender: {character.gender ? character.gender : "unknown"}</p>
        <p>Origin: 
            <Link to={ROUTES.LOCATIONS}>
                {character.origin?.name ? character.origin.name : "unknown" }
            </Link>
        </p>
        <p>Location: 
            <Link to={ROUTES.LOCATIONS}>
                {character.location?.name ? character.location.name : "unknown" }
            </Link>
        </p>
        <div>
           
        </div>
    </div>
  )
}

export default CharacterPage