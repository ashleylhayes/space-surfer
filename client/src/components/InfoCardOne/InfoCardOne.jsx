import React from 'react';
import Speech from 'react-speech';
import '../InfoCardOne/InfoCardOne.scss'

class InfoCardOne extends React.Component {

    render() {
        let {firstFact, content} = this.props;
        return (
            <div onClick={firstFact} className='info-card-one'>
                    <div className='info-card-one__content'>
                        <p>{content}<Speech text={content} voice="Samantha" rate="0.7" pitch="0.9" /></p>
                    </div>
            </div>
        )
    }
}

export default InfoCardOne;