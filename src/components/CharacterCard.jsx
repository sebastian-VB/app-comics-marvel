
import React from 'react';
import '../stylesheets/CharacterCard.css';

function CharacterCard ({ name }){

  return(
    <div className='container__character'>
      <div className='character-img'></div>
      <p className='character-name'>{name}</p>
    </div>
  );
}


export default CharacterCard;

