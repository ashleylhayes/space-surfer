import React from 'react';
import { Link } from 'react-router-dom';
import Puzzle from 'react-image-puzzle';
import '../ImagePuzzle/ImagePuzzle.scss';
import solarSystem from '../../assets/images/solar-system-image.jpg';
import spaceSurfer from '../../assets/images/space-surfer.png';
import MouseTooltip from 'react-sticky-mouse-tooltip';

function ImagePuzzle(){
      return (
          <div>
        <div className='image-puzzle__nav'>
        <Link to='/'><button className='image-puzzle__nav-button'>HOME</button></Link>
        </div>
            <div className='image-puzzle'>
                <h1 className='image-puzzle__title'>Solar System Puzzle</h1>
                <Puzzle 
                    image={solarSystem}
                    size="600"
                    level="5"
                />
                <img className='image-puzzle__thumbnail' src={solarSystem} alt='colorful solar system objects' />
            </div>
            <MouseTooltip offsetX={5} offsetY={5}>
            <div className='image-puzzle__space-surfer-container hovering'>
                <img className='image-puzzle__astronaut' src={spaceSurfer} alt='astronaut wearing white an orange suit riding a rocket surfboard' />
            </div>
            </MouseTooltip>
            </div>
      )
}


export default ImagePuzzle;