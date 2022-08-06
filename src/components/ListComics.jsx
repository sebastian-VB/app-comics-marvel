
import React from 'react';
import logoMarvel from '../images/logo-marvel.png';
import '../stylesheets/ListComics.css';

function ListComics(){

  return(
    <div>
      <section className='app__container-logo'>
        <img src={logoMarvel} alt='Logo marvel' className='app__logo' />
      </section>
      
      <section className='app__container-main'>
        <h1 className='main__title'>Listado de COMICS</h1>
      </section>

    </div>
  );
}

export default ListComics;

