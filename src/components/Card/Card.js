import React from 'react';

const Card = ({ movie }) => {
    return(
        <>
    <h2>{`#${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
        <img src={movie.img.src} alt={movie.img.alt} width='200' />
    <p>{`Distributor: ${movie.distributor}`}</p>
    <p>{`Amount: ${movie.amount}`}</p>
    </>
    ) 
}

export default Card;