
import React from 'react';
import '../stylesheets/ComicCard.css';

function ComicCard ({ title, poster, id }){

  return(
    <div className='container__comic'>
      <img className='img' src={poster} alt='Poster del comic' />
      <div className='title-btn'>
        <h2 className='title-comic'>{title}</h2>
        <a href='#' className='btn'>ver más</a>
      </div>
    </div>
  );
}

export default ComicCard;


