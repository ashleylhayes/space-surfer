import React from 'react';
import { Link } from 'react-router-dom';
import MouseTooltip from 'react-sticky-mouse-tooltip';
import ReactPlayer from 'react-player';
import spaceSurfer from '../../assets/images/space-surfer.png';
import '../TitleScreen/TitleScreen.scss';

function TitleScreen(){
    return (
        <div className='title-screen'>
            <div className='title-screen__title'>
                <div><span className='title-screen__title-big'>S</span><span>P</span><span>A</span><span>C</span><span>E</span></div>
                <div><span className='title-screen__title-big'>S</span><span>U</span><span className='title-screen__title-big'>R</span><span>F</span><span>E</span><span className='title-screen__title-big'>R</span></div>
            </div>
            <div className='title-screen__button-container'>
                <Link to='/menu/learn'><button className='title-screen__button'>LEARN</button></Link>
                <Link to='/menu/play'><button className='title-screen__button'>PLAY</button></Link>
            </div>
            <MouseTooltip offsetX={5} offsetY={5}>
            <div className='title-screen__space-surfer-container hovering'>
                <img className='title-screen__astronaut' src={spaceSurfer} alt='astronaut wearing white an orange suit riding a rocket surfboard' />
            </div>
            </MouseTooltip>
            <div className='title-screen__player'>
                <ReactPlayer
                    url="https://soundcloud.com/the-surfaris/wipeout-1#t=0:05"
                    playing="true"
                />
            </div>
        </div>
    )
}

export default TitleScreen;