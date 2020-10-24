import React from 'react';
import Speech from 'react-speech';
import axios from 'axios';
import '../SpaceSurfer/SpaceSurfer.scss';
import astronaut from '../../assets/images/astronaut.png';
import rocket from '../../assets/images/rocket.png';

const URL = 'http://localhost:8383/objects/'

class SpaceSurfer extends React.Component {
    state = {
        currentObjectContent: [],
        talkBubbleContent: [],
    };

    componentDidMount() {
        const ID = '1af0jruup5gu';
        axios.get(URL + ID)
        .then(({ data }) => {
            this.setState({
                currentObjectContent: data,
                talkBubbleContent: data.greeting
            });
        })
        .catch(error => console.log(error));
    };

    render() {
    return (
      <div className='space-surfer'>
            <div className='space-surfer__talk-bubble-container'>
                <div className='space-surfer__talk-bubble'>
                    <div className='space-surfer__talk-bubble-text'>{this.state.talkBubbleContent}<Speech text={this.state.talkBubbleContent} voice="Samantha" rate="0.9" pitch="0.9" /></div>
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
                <img className='space-surfer__sun dancing' src={this.state.currentObjectContent.image} alt='solar system object' />
            </div>
      </div>
    );
  }
}
  
  export default SpaceSurfer;