import React from 'react';
import hero from "../../assets/hero.jpeg";

const HomePage = () => {
  return (
    <div className='w-full h-ful flex flex-col justify-center items-center'>
        <img className='w-96' src={hero} alt="Rick and Morty" />
        <h1>Welcome to Rick And Morty Land</h1>
    </div>
  )
}

export default HomePage;