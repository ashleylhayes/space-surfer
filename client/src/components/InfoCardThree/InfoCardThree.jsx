import React from 'react';
import Speech from 'react-speech';
import '../InfoCardThree/InfoCardThree.scss'
import cardLogo from '../../assets/images/memory-logo.png'

class InfoCardThree extends React.Component {
    state = { isActive: false };

    flipCard = () => {
        console.log('I was clicked!');
        console.log(this);
        this.setState({ isActive: !this.state.isActive });
    }

    render() {
        // let {image, title, channel} = this.props;
        return (
            <div onClick={this.flipCard} className={this.state.isActive ? 'info-card-three flip' : 'info-card-three'}>
                <div className='info-card-three__front'>
                    <div className='info-card-three__front-content'></div>
                </div>
                <div className='info-card-three__back'>
                    <img className='info-card-three__back' src={cardLogo} alt='space surfer logo' />
                </div>
            </div>
        )
    }
}

export default InfoCardThree;