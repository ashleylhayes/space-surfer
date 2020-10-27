import React from 'react';
import Speech from 'react-speech';
import '../Questions/Questions.scss';

class Questions extends React.Component {

    render() {
        let {firstFact, firstContent, secondFact, secondContent, thirdFact, thirdContent, fourthFact, fourthContent, fifthFact, fifthContent, sixthFact, sixthContent} = this.props;
        return (
            <div className='questions'>
                <div onClick={firstFact} className='questions__one'>
                    <div className='questions__one-content'>
                        <p>{firstContent}<Speech text={firstContent} voice="Samantha" rate="0.7" pitch="0.9" /></p>
                    </div>
                </div>
                <div onClick={secondFact} className='questions__two'>
                    <div className='questions__two-content'>
                        <p>{secondContent}<Speech text={secondContent} voice="Samantha" rate="0.7" pitch="0.9" /></p>
                    </div>
                </div>
                <div onClick={thirdFact} className='questions__three'>
                    <div className='questions__three-content'>
                        <p>{thirdContent}<Speech text={thirdContent} voice="Samantha" rate="0.7" pitch="0.9" /></p>
                    </div>
                </div>
                <div onClick={fourthFact} className='questions__four'>
                    <div className='questions__four-content'>
                        <p>{fourthContent}<Speech text={fourthContent} voice="Samantha" rate="0.7" pitch="0.9" /></p>
                    </div>
                </div>
                <div onClick={fifthFact} className='questions__five'>
                    <div className='questions__five-content'>
                        <p>{fifthContent}<Speech text={fifthContent} voice="Samantha" rate="0.7" pitch="0.9" /></p>
                    </div>
                </div>
                <div onClick={sixthFact} className='questions__six'>
                    <div className='questions__six-content'>
                        <p>{sixthContent}<Speech text={sixthContent} voice="Samantha" rate="0.7" pitch="0.9" /></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Questions;