import React from 'react';
import { Link } from 'react-router-dom';
import spaceSurfer from '../../assets/images/space-surfer.png';
import MouseTooltip from 'react-sticky-mouse-tooltip';
import '../LearnMenu/LearnMenu.scss';

function LearnMenu() {
    return (
        <div className='learn-menu'>
            <div className='learn-menu__nav'>
                    <Link to='/'><button className='learn-menu__nav-button'>HOME</button></Link>
                </div>
            <div className='learn-menu__button-container'>
                <Link to='/learn/11051223101501230'><button className='learn-menu__button'>ALL ABOUT THE SOLAR SYSTEM</button></Link>
                <Link to='/model/11051223101501230'><button className='learn-menu__button'>PLANETS IN 3D</button></Link>
                <Link to='/photo'><button className='learn-menu__button'>NASA PHOTO OF THE DAY</button></Link>
            </div>
            <MouseTooltip offsetX={5} offsetY={5}>
            <div className='learn-menu__space-surfer-container hovering'>
                <img className='learn-menu__astronaut' src={spaceSurfer} alt='astronaut wearing white an orange suit riding a rocket surfboard' />
            </div>
            </MouseTooltip>
        </div>
    )
}

export default LearnMenu;