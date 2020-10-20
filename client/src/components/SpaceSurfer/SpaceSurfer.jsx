import React from 'react';
import '../SpaceSurfer/SpaceSurfer.scss';
import astronaut from '../../assets/astronaut.png';
import rocket from '../../assets/rocket.png';
import sun from '../../assets/sun.png';

function SpaceSurfer() {
    return (
      <div className='space-surfer'>
            <div className='space-surfer__space-surfer-container hovering'>
                <div className='space-surfer__astronaut-container'>
                    <img className='space-surfer__astronaut' src={astronaut} />
                </div>
                <div>
                    <img className='space-surfer__rocket' src={rocket} />
                </div>
            </div>
            <div className='space-surfer__sun-container'>
                <img className='space-surfer__sun dancing' src={sun} />
            </div>
      </div>
    );
  }
  
  export default SpaceSurfer;