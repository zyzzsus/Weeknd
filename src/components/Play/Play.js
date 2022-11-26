import React from 'react'
import './Play.css';
import {FaPlay} from 'react-icons/fa';

const Play = () => {
  return (
    <div className='playbutton'>
        <button
        type='button'
        onClick={(e) =>{
          e.preventDefault();
          window.location.href = 'https://open.spotify.com/playlist/715RC3PPYfoFfsKSxisJq1'
        }}>
            <FaPlay color='white'/>;
        </button>
        <p>
            Play on spotify
        </p>
    </div>
  )
}

export default Play