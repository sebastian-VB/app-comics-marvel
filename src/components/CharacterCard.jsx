
import React, { useState, useEffect } from 'react';
import '../stylesheets/CharacterCard.css';
import { getOnlyCharacter } from '../connection/funcion';

function CharacterCard ({ id }){

  const [character, setCharacter] = useState(null);
  
  useEffect(()=>{
    getOnlyCharacter(setCharacter, id);
  },[])


  return(
    <div className='container__character'>
      {
        character !== null
        ?
          (
            <div>
              <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt='Poster del comic' className='character-img' />
              <p className='character-name'>{character.name}</p>
            </div>
          )
        :
          ('no hay personajes')
      }
      
    </div>
  );
}


export default CharacterCard;

