import React from 'react';
import Speech from 'react-speech';
import '../InfoCardFour/InfoCardFour.scss'
import cardLogo from '../../assets/images/memory-logo.png'

class InfoCardFour extends React.Component {
    state = { isActive: false };

    flipCard = () => {
        console.log('I was clicked!');
        console.log(this);
        this.setState({ isActive: !this.state.isActive });
    }

    render() {
        // let {image, title, channel} = this.props;
        return (
            <div onClick={this.flipCard} className={this.state.isActive ? 'info-card-four flip' : 'info-card-four'}>
                <div className='info-card-four__front'>
                    <div className='info-card-four__front-content'></div>
                </div>
                <div className='info-card-four__back'>
                    <img className='info-card-four__back' src={cardLogo} alt='space surfer logo' />
                </div>
            </div>
        )
    }
}

export default InfoCardFour;