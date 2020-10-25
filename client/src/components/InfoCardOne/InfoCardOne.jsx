import React from 'react';
import Speech from 'react-speech';
import '../InfoCardOne/InfoCardOne.scss'
import cardLogo from '../../assets/images/memory-logo.png'

class InfoCardOne extends React.Component {
    state = { isActive: false };

    flipCard = () => {
        console.log('I was clicked!');
        console.log(this);
        this.setState({ isActive: !this.state.isActive });
    }

    render() {
        // let {image, title, channel} = this.props;
        return (
            <div onClick={this.flipCard} className={this.state.isActive ? 'info-card-one flip' : 'info-card-one'}>
                <div className='info-card-one__front'>
                    <div className='info-card-one__front-content'></div>
                </div>
                <div className='info-card-one__back'>
                    <img className='info-card-one__back' src={cardLogo} alt='space surfer logo' />
                </div>
            </div>
        )
    }
}

export default InfoCardOne;