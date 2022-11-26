import React from 'react'
import './About.css';
import weekend from './weekend.png'

const About = () => {
  return (
    <>
        <div className='image'>
            <img src={weekend} alt='weekend'/>
        </div>

        <div className='info'>
            <div className='name'>
                THE WEEKND
            </div>
            <div className='about'>
                Abel Makkonen Tesfaye (born February 16, 1990), known professionally as 
                the Weeknd, 
                is a Canadian singer, songwriter, and record producer. 
                Known for his sonic versatility 
                and dark lyricism, his music explores escapism, romance,
                and melancholia, and is often inspired by personal experiences. 
                He has received numerous accolades, including four Grammy Awards, a
                Latin Grammy Award, 20 Billboard Music Awards, 17 Juno Awards, 
                six American Music Awards, two MTV Video Music Awards, and nominations 
                for an Academy Award and a Primetime Emmy Award.    
            </div>
        </div>
    </>
  )
}

export default About;