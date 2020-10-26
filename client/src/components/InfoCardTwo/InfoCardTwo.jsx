import React from 'react';
import Speech from 'react-speech';
import '../InfoCardTwo/InfoCardTwo.scss'

class InfoCardTwo extends React.Component {

    render() {
        let {secondFact, content} = this.props;
        return (
            <div onClick={secondFact} className='info-card-two'>
                <div className='info-card-two__content'>
                <p>{content}<Speech text={content} voice="Samantha" rate="0.7" pitch="0.9" /></p>
                </div>
            </div>
        )
    }
}

export default InfoCardTwo;