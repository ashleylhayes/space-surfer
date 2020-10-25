import React from 'react';
import Speech from 'react-speech';
import '../InfoCardOne/InfoCardOne.scss'
import alienImage from '../../assets/images/memory-alien.png'
import cardLogo from '../../assets/images/memory-logo.png'

class InfoCardOne extends React.Component {
    render() {
        // let {image, title, channel} = this.props;
        return (
            <div className='info-card-one'>
                <div>
                    <img className='info-card-one__front' src={alienImage} alt='alien' />
                    <img className='info-card-one__back' src={cardLogo} alt='space surfer logo' />
                </div>
            </div>
        )
    }
}

export default InfoCardOne;