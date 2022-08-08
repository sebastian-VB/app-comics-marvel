
import React, { useEffect, useState } from 'react';
import logoMarvel from '../images/logo-marvel.png';
import escudo from '../images/Escudo_Capitán_América.png';
import martillo from '../images/Martillo_Thor.png';
import '../stylesheets/ListComics.css';
import ComicCard from './ComicCard';
import { getAllCommits } from '../connection/funcion.js';

function ListComics(){

  //para el listado de comics se utilizaran: id, title, thumbnail + extension 
  const [listComics, setListComics] = useState(null);

  useEffect(()=>{
    getAllCommits(setListComics);
  },[]);

  return(
    <div>
      <section className='app__container-logo'>
        <img src={logoMarvel} alt='Logo marvel' className='app__logo' />
        <img src={escudo} alt='Logo marvel' className='img-escudo animateI' />
        <img src={martillo} alt='Logo marvel' className='img-martillo animateI' />
      </section>
      
      <section className='app__container-main'>
        <h1 className='main__title'>Listado de COMICS</h1>
        <div className='container__list'>
          {
            listComics !== null 
            ?
              listComics.map(comic =>(
                <div key={comic.id}>
                  <ComicCard 
                    title={comic.title} 
                    poster={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  />
                </div>
              ))
            :
              console.log('Aun no devuelve informacion')
          }
        </div>
      </section>

    </div>
  );
}

export default ListComics;

