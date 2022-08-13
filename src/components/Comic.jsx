
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnlyComic } from '../connection/funcion';
import marvel from '../images/marvel.png';
import '../stylesheets/Comic.css';
import CreatorCard from './CreatorCard.jsx';

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
          (
            <div key={comic.id}>
              <section className='container__comic-titleDescription'>
                <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt='Poster del comic' className='poster-comic' />
                <div className='texts-comic'>
                  <h1 className='title-comic'>{comic.title}</h1>
                  {
                    comic.description !== '' 
                    ? <p className='description-comic'>{comic.description}</p>
                    : <p className='description-comic'>No hay descripción del comic</p>
                  }
                  
                </div>
              </section>

              <section className='container__comic-creators'>
                  <h2 className='creators-title'>Creadores</h2>
                  <div className='creators-containerInfo'>
                    {
                      //http://gateway.marvel.com/v1/public/creators/ = 45 caracteres
                      comic.creators.items.map(comicI =>(
                        <CreatorCard
                          key={parseInt(comicI.resourceURI.substr(45))} 
                          name={comicI.name} role={comicI.role} 
                        />
                      ))
                    }
                    
                  </div>
              </section>

              <section className='container__comic-characters'>

              </section>
            </div>
          )
        :
          ('no hay comic')
      }


    </div>
  );
}

export default Comic;


