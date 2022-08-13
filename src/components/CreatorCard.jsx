
import React from 'react';
import '../stylesheets/CreatorCard.css';

function CreatorCard ({ name, role }){

  return(
    <div className='creator-card'>
      <h3 className='creator'>{name}</h3>
      <p className='role'>{role}</p>
    </div>
  );
}

export default CreatorCard;
