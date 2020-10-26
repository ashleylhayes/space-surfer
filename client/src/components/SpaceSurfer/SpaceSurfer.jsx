import React from 'react';
import Speech from 'react-speech';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import '../SpaceSurfer/SpaceSurfer.scss';
import astronaut from '../../assets/images/astronaut.png';
import rocket from '../../assets/images/rocket.png';
import InfoCardOne from '../InfoCardOne/InfoCardOne';
import InfoCardTwo from '../InfoCardTwo/InfoCardTwo';
import InfoCardThree from '../InfoCardThree/InfoCardThree';

const URL = 'http://localhost:8383/objects/';

class SpaceSurfer extends React.Component {
    state = {
        currentObjectContent: [],
        talkBubbleContent: [],
    };

    componentDidMount() {
        const { match } = this.props;
        const ID = match.params.id;
        if (ID !== this.state.currentObjectContent.id) {
            axios.get(URL + ID)
            .then(({ data }) => {
                this.setState({
                    currentObjectContent: data,
                    talkBubbleContent: data.greeting
                });
            })
            .catch(error => console.log(error));
        };
    };

    componentDidUpdate(prevProps, prevState) {
        const { match } = this.props;
        const ID = match.params.id;
        console.log(ID);
        if (ID !== this.state.currentObjectContent.id) {
            axios.get(URL + ID)
            .then(({ data }) => {
                console.log(data)
                this.setState({
                    currentObjectContent: data,
                    talkBubbleContent: data.greeting
                });
            })
            .catch(error => console.log(error));
        };
    };

    firstFact = () => {
        const ID = this.state.currentObjectContent.id;
        axios.get(URL + ID)
        .then(({ data }) => {
            this.setState({
                talkBubbleContent: data.firstFact
            });
        })
        .catch(error => console.log(error));
    };

    secondFact = () => {
        const ID = this.state.currentObjectContent.id;
        axios.get(URL + ID)
        .then(({ data }) => {
            this.setState({
                talkBubbleContent: data.secondFact
            });
        })
        .catch(error => console.log(error));
    };

    thirdFact = () => {
        const ID = this.state.currentObjectContent.id;
        console.log(ID);
        axios.get(URL + ID)
        .then(({ data }) => {
            this.setState({
                talkBubbleContent: data.thirdFact
            });
        })
        .catch(error => console.log(error));
    };

    render() {
    return (
      <div className='space-surfer'>
            <div className='space-surfer__bubble-object-container'>
                <div className='space-surfer__talk-bubble-container'>
                    <div className='space-surfer__talk-bubble'>
                        <div className='space-surfer__talk-bubble-text'>{this.state.talkBubbleContent}<Speech text={this.state.talkBubbleContent} voice="Samantha" rate="0.7" pitch="0.9" /></div>
                    </div>
                    <div className='space-surfer__talk-bubble-dot-container'>
                        <div className='space-surfer__talk-bubble-dot-one'></div>
                        <div className='space-surfer__talk-bubble-dot-two'></div>
                        <div className='space-surfer__talk-bubble-dot-three'></div>
                    </div>
                </div>
                <div className='space-surfer__object-container'>
                    <img className='space-surfer__object dancing' src={this.state.currentObjectContent.image} alt={this.state.currentObjectContent.name} />
                </div>
            </div>
            <div className='space-surfer__surfer-cards-container'>
                <div className='space-surfer__space-surfer-container hovering'>
                    <div className='space-surfer__astronaut-container'>
                        <img className='space-surfer__astronaut' src={astronaut} alt='astronaut wearing white and orange suit' />
                    </div>
                    <div>
                        <img className='space-surfer__rocket' src={rocket} alt='rocket surfboad' />
                    </div>
                </div>
                <div>
                    <div className='space-surfer__cards-container'>
                    <InfoCardOne firstFact={this.firstFact} key={uuidv4()} content={this.state.currentObjectContent.firstQuestion} />
                    <InfoCardTwo secondFact={this.secondFact} key={uuidv4()} content={this.state.currentObjectContent.secondQuestion}/>
                    <InfoCardThree thirdFact={this.thirdFact} key={uuidv4()} content={this.state.currentObjectContent.thirdQuestion} />
                    </div>
                </div>
            </div>
      </div>
    );
  }
}
  
  export default SpaceSurfer;