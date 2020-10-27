import React from 'react';
import { Link } from 'react-router-dom';
import MouseTooltip from 'react-sticky-mouse-tooltip';
import ReactPlayer from 'react-player';
import astronaut from '../../assets/images/astronaut.png';
import rocket from '../../assets/images/rocket.png';
import '../TitleScreen/TitleScreen.scss';

function TitleScreen(){
    return (
        <div className='title-screen'>
            <div className='title-screen__title'>
                <div><span>S</span><span>P</span><span>A</span><span>C</span><span>E</span></div>
                <div><span>S</span><span>U</span><span>R</span><span>F</span><span>E</span><span>R</span></div>
            </div>
            <div className='title-screen__button-container'>
                <Link to='/learn/11051223101501230'><button className='title-screen__button'>LEARN</button></Link>
                <Link to='/trivia'><button className='title-screen__button'>PLAY</button></Link>
            </div>
            <MouseTooltip offsetX={5} offsetY={5}>
            <div className='title-screen__space-surfer-container hovering'>
                <div className='title-screen__astronaut-container'>
                    <img className='title-screen__astronaut' src={astronaut} alt='astronaut wearing white and orange suit' />
                </div>
                <div>
                    <img className='title-screen__rocket' src={rocket} alt='rocket surfboad' />
                </div>
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