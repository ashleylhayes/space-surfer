import React from 'react';
import Puzzle from 'react-image-puzzle';
import '../ImagePuzzle/ImagePuzzle.scss';
import solarSystem from '../../assets/images/solar-system-image.jpg';

function ImagePuzzle(){
      return (
            <div className='image-puzzle'>
                <Puzzle 
                    image={solarSystem}
                    size="500"
                    level="4"
                />
            </div>
      )
}


export default ImagePuzzle;