import React from 'react';
import Speech from 'react-speech';
import '../InfoCardTwo/InfoCardTwo.scss'
import cardLogo from '../../assets/images/memory-logo.png'

class InfoCardTwo extends React.Component {
    state = { isActive: false };

    flipCard = () => {
        console.log('I was clicked!');
        console.log(this);
        this.setState({ isActive: !this.state.isActive });
    }

    render() {
        // let {image, title, channel} = this.props;
        return (
            <div onClick={this.flipCard} className={this.state.isActive ? 'info-card-two flip' : 'info-card-two'}>
                <div className='info-card-two__front'>
                    <div className='info-card-two__front-content'></div>
                </div>
                <div className='info-card-two__back'>
                    <img className='info-card-two__back' src={cardLogo} alt='space surfer logo' />
                </div>
            </div>
        )
    }
}

export default InfoCardTwo;