import React from 'react';

const Card = ({ name, email, username, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2><u>{name}</u></h2>
        <p>Email: {email}</p>
        <p>Username: {username}</p>
      </div>
    </div>
  );
}

export default Card;
