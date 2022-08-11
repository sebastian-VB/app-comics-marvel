
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnlyComic } from '../connection/funcion';
import marvel from '../images/marvel.png';
import '../stylesheets/Comic.css';

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

      <header className='header'>
        <img src={marvel} alt='Logo marvel' className='logo-header' />
      </header>

      {
        comic !== null
        ?
          comic.map(comicI =>(
            <div key={comicI.id}>
              <section className='container__comic-titleDescription'>
                <img src={`${comicI.thumbnail.path}.${comicI.thumbnail.extension}`} alt='Poster del comic' className='poster-comic' />
                <div className='texts-comic'>
                  <h1 className='title-comic'>{comicI.title}</h1>
                  {
                    comicI.description !== '' 
                    ? <p className='description-comic'>{comicI.description}</p>
                    : <p className='description-comic'>No hay descripción del comic</p>
                  }
                  
                </div>
              </section>

              <section className='container__comic-creators'>

              </section>

              <section className='container__comic-characters'>

              </section>
            </div>
          ))
        :
          console.log('Aun no carga la informacion del comic')
      }

    </div>
  );
}

export default Comic;


