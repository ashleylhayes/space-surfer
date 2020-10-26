import React from 'react';
import Speech from 'react-speech';
import '../InfoCardThree/InfoCardThree.scss'

class InfoCardThree extends React.Component {

    render() {
        let {thirdFact, content} = this.props;

        return (
            <div onClick={thirdFact} className='info-card-three'>
                <div className='info-card-three__content'>
                <p>{content}<Speech text={content} voice="Samantha" rate="0.7" pitch="0.9" /></p>
                </div>
            </div>
        )
    }
}

export default InfoCardThree;