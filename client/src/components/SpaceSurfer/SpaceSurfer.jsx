import React from 'react';
import Typewriter from 'typewriter-effect';
import axios from 'axios';
import '../SpaceSurfer/SpaceSurfer.scss';
import astronaut from '../../assets/images/astronaut.png';
import rocket from '../../assets/images/rocket.png';
import sun from '../../assets/images/sun.png';

const URL = 'http://localhost:8080/objects/'

class SpaceSurfer extends React.Component {
    state = {
        currentObjectContent: []
    };

    componentDidMount() {
        const ID = '1af0jruup5gu';
        axios.get(URL + ID)
        .then(({ data }) => {
            this.setState({
                currentObjectContent: data,
            });
        })
        .catch(error => console.log(error));
    };

    render() {
    return (
      <div className='space-surfer'>
            <div className='space-surfer__talk-bubble-container'>
                <div className='space-surfer__talk-bubble'>
                    <div className='space-surfer__talk-bubble-text'><Typewriter options={{ cursor: null, autoStart: true}} onInit={(typewriter) => { typewriter.changeDelay(60).typeString('Hello, Space Surfer! ').deleteChars(1).start();}} /></div>
                    <div className='space-surfer__talk-bubble-text'><Typewriter options={{ cursor: null, autoStart: true}} onInit={(typewriter) => { typewriter.pauseFor(2500).changeDelay(60).typeString('Are you ready to play and learn about our Solar System? ').deleteChars(1).start();}} /></div>
                    <Typewriter options={{ cursor: null, autoStart: true}} onInit={(typewriter) => { typewriter.pauseFor(7000).changeDelay(60).pasteString("<button>Let's Play!</button> ").deleteChars(1).start();}} />
                </div>
                <div className='space-surfer__talk-bubble-dot-container'>
                    <div className='space-surfer__talk-bubble-dot-one'></div>
                    <div className='space-surfer__talk-bubble-dot-two'></div>
                    <div className='space-surfer__talk-bubble-dot-three'></div>
                </div>
            </div>
            <div className='space-surfer__space-surfer-container hovering'>
                <div className='space-surfer__astronaut-container'>
                    <img className='space-surfer__astronaut' src={astronaut} alt='astronaut wearing white and orange suit' />
                </div>
                <div>
                    <img className='space-surfer__rocket' src={rocket} alt='rocket surfboad' />
                </div>
            </div>
            <div className='space-surfer__sun-container'>
                <img className='space-surfer__sun dancing' src={sun} alt='solar system object' />
            </div>
      </div>
    );
  }
}
  
  export default SpaceSurfer;