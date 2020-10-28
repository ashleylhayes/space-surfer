import React from 'react';
import { Link } from 'react-router-dom';
import spaceSurfer from '../../assets/images/space-surfer.png';
import MouseTooltip from 'react-sticky-mouse-tooltip';
import '../PlayMenu/PlayMenu.scss';

function PlayMenu() {
    return (
        <div className='play-menu'>
            <div className='play-menu__nav'>
                <Link to='/'><button className='play-menu__nav-button'>HOME</button></Link>
            </div>
            <div className='play-menu__button-container'>
                <Link to='/trivia'><button className='play-menu__button'>SOLAR SYSTEM TRIVIA</button></Link>
                <Link to='/memory'><button className='play-menu__button'>SPACE MEMORY GAME</button></Link>
                <Link to='/puzzle'><button className='play-menu__button'>SOLAR SYSTEM PUZZLE</button></Link>
            </div>
            <MouseTooltip offsetX={5} offsetY={5}>
            <div className='play-menu__space-surfer-container hovering'>
                <img className='play-menu__astronaut' src={spaceSurfer} alt='astronaut wearing white an orange suit riding a rocket surfboard' />
            </div>
            </MouseTooltip>
        </div>
    )
}

export default PlayMenu;