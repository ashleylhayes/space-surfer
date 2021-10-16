import React from 'react';
import Speech from 'react-speech';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import MouseTooltip from 'react-sticky-mouse-tooltip';
import '../SpaceSurfer/SpaceSurfer.scss';
import astronaut from '../../assets/images/astronaut.png';
import rocket from '../../assets/images/rocket.png';
import Questions from '../Questions/Questions';

const URL = 'http://localhost:8383/objects/';

class SpaceSurfer extends React.Component {
    state = {
        currentObjectContent: [],
        talkBubbleContent: [],
        nextObjectIndex: 1,
        nextObjectId: []
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
            axios.get(URL)
            .then(({ data }) => {
                this.setState({
                    nextObjectId: data[this.state.nextObjectIndex].id
                });
            })
            .catch(error => console.log(error));
        };
    };

    componentDidUpdate(prevProps, prevState) {
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
            axios.get(URL)
            .then(({ data }) => {
                this.setState({
                    nextObjectId: data[this.state.nextObjectIndex].id
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
        axios.get(URL + ID)
        .then(({ data }) => {
            this.setState({
                talkBubbleContent: data.thirdFact
            });
        })
        .catch(error => console.log(error));
    };

    fourthFact = () => {
        const ID = this.state.currentObjectContent.id;
        axios.get(URL + ID)
        .then(({ data }) => {
            this.setState({
                talkBubbleContent: data.fourthFact
            });
        })
        .catch(error => console.log(error));
    };

    fifthFact = () => {
        const ID = this.state.currentObjectContent.id;
        axios.get(URL + ID)
        .then(({ data }) => {
            this.setState({
                talkBubbleContent: data.fifthFact
            });
        })
        .catch(error => console.log(error));
    };

    sixthFact = () => {
        const ID = this.state.currentObjectContent.id;
        axios.get(URL + ID)
        .then(({ data }) => {
            this.setState({
                talkBubbleContent: data.sixthFact
            });
        })
        .catch(error => console.log(error));
    };

    updateIndex = () => {
        this.setState({nextObjectIndex: this.state.nextObjectIndex + 1});
    }

    render() {
    return (
      <div className='space-surfer'>
          <div className='space-surfer__nav'>
            <Link to='/'><button className='space-surfer__nav-button'>HOME</button></Link>
            <Link to={`/learn/${this.state.nextObjectId}`}><button onClick={this.updateIndex} className='space-surfer__nav-button'>NEXT</button></Link>
        </div>
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
                <MouseTooltip offsetX={5} offsetY={5}>
                <div className='space-surfer__space-surfer-container hovering'>
                    <div className='space-surfer__astronaut-container'>
                        <img className='space-surfer__astronaut' src={astronaut} alt='astronaut wearing white and orange suit' />
                    </div>
                    <div>
                        <img className='space-surfer__rocket' src={rocket} alt='rocket surfboad' />
                    </div>
                </div>
                </MouseTooltip>
                <div>
                    <div className='space-surfer__cards-container'>
                    <Questions 
                        key={uuidv4()} 
                        firstFact={this.firstFact} 
                        firstContent={this.state.currentObjectContent.firstQuestion} 
                        secondFact={this.secondFact} 
                        secondContent={this.state.currentObjectContent.secondQuestion}
                        thirdFact={this.thirdFact} 
                        thirdContent={this.state.currentObjectContent.thirdQuestion}
                        fourthFact={this.fourthFact} 
                        fourthContent={this.state.currentObjectContent.fourthQuestion}
                        fifthFact={this.fifthFact} 
                        fifthContent={this.state.currentObjectContent.fifthQuestion}
                        sixthFact={this.sixthFact} 
                        sixthContent={this.state.currentObjectContent.sixthQuestion}
                    />
                    </div>
                </div>
            </div>
      </div>
    );
  }
}
  
  export default SpaceSurfer;