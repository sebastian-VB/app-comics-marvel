
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnlyComic } from '../connection/funcion';

function Comic (){

  //para el comic se usara: titulo, descripcion, thumbnail.path + thumbnail.extension, 
  //creadores(nombre, rol), personajes(nombre, imagen).
  const params = useParams();

  const [comic, setComic] = useState(null);

  useEffect(()=>{
    getOnlyComic(setComic, params.id);
  },[]);


  return(
    <div className='container__comicInfo'>

      <section className='container__comic-titleDescription'>

      </section>

      <section className='container__comic-creators'>

      </section>

      <section className='container__comic-characters'>

      </section>

    </div>
  );
}

export default Comic;


