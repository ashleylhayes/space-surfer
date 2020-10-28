import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MouseTooltip from 'react-sticky-mouse-tooltip';
import '../Trivia/Trivia.scss';
import spaceSurfer from '../../assets/images/space-surfer.png';

const URL = 'http://localhost:8383/trivia/';

class Trivia extends Component {
    state = {
        gameEdition: '',
        gameStart: false,
        gameChoice: false,
        initialGameState: true,
        playerScore: 0,
        gameReset: false,
        startSolar: false,
        questionNum: 0,
        totalQuestions: 0,
        question: '',
        right: '',
        a1: '',
        a2: '',
        a3: '',
        a4: ''
    };

    loadNewQuestion = () => {
        if (this.state.gameEdition === 'Solar System') {
            axios.get(URL)
            .then(({ data }) => {
                this.setState({
                    question: data[this.state.questionNum].question,
                    a1: data[this.state.questionNum].a1,
                    a2: data[this.state.questionNum].a2,
                    a3: data[this.state.questionNum].a3,
                    a4: data[this.state.questionNum].a4,
                    right: data[this.state.questionNum].right,
                    totalQuestions: data.length
                });
            })
        }
    };

    showGame = e => {
        this.setState({
            gameChoice: true
        });
    };

    startGame = () => {
        if (this.state.gameEdition === 'Solar System') {
            this.solarGameStart();
        }
        this.setState({
            gameStart: false,
            gameChoice: false,
            initialGameState: false
        });
    };

    selectionReset = () => {
        this.setState({
            initialGameState: true,
            playerScore: 0,
            gameReset: false,
            startSolar: false,
            questionNum: 0
        });
    };

    solarEdition = e => {
        this.setState({
            gameEdition: 'Solar System',
            gameStart: true
        });
    };

    solarGameStart = () => {
        this.setState({
            startSolar: true,
            questionNum: this.state.questionNum + 1
        });
        this.loadNewQuestion();
    };

    checkAnswer = e => {
        this.setState({
            questionNum: this.state.questionNum + 1
        });
        this.otherCheck(e);
    };

    otherCheck = e => {
        let id = e.target.getAttribute('data_id');
        if (id === this.state.right) {
            this.setState({
                playerScore: this.state.playerScore + 1
            });
        }

        if (this.state.questionNum < this.state.totalQuestions - 1) {
            this.loadNewQuestion();
        } else {
            this.gameOver();
        }
    };

    gameOver = () => {
        this.setState({
            questionNum: 0,
            a1: '',
            a2: '',
            a3: '',
            a4: '',
            gameReset: true
        });
    };

    render() {
        return (
        <div className='trivia'>
        <div className='nav'>
        <Link to='/'><button className='trivia__nav-start-button'>HOME</button></Link>
        </div>
        <div className='trivia__container'>
            <h1 className='trivia__title'>Welcome To Solar System Trivia!</h1>
            <h3 className='trivia__greeting'>
                Hello, Space Surfer! Are you ready to play?
            </h3>
            {this.state.initialGameState ? ('') : (<button className="trivia__nav-start-button" onClick={this.selectionReset}>START OVER</button>)}
            <div>
                {this.state.initialGameState ? (<button className='trivia__button' onClick={this.showGame}>YES!</button>) : ('')}
            </div>
        </div>
        <div>
            <div className='trivia__play-container'>
                {this.state.gameChoice ? (<button className='trivia__button' onClick={this.solarEdition}>PLAY</button>) : ('')}
            </div>
        </div>
        <div className='trivia__play-container'>
            {this.state.gameStart ? (<button id='game-start-load' className='trivia__start' onClick={this.startGame}>NEW GAME</button>) : ('')}
        </div>
        <div>
            {(!this.state.gameReset && this.state.questionNum > 0 && this.state.startSolar) ?
                (<div className='trivia__progress-bar' style={{width: `${((this.state.questionNum / this.state.totalQuestions) * 100) / 2}%`}}>
                    Finished:
                    {' '}{`${((this.state.questionNum / this.state.totalQuestions) * 100).toFixed(2)}%`}
                </div>) :
                ('')
            }
        </div>
        <div className='trivia__questions'>
            {this.state.startSolar ? 
                (<div>
                    <div>
                        {!this.state.gameReset ? 
                            (<div>
                                <h3 className='trivia__question-number'>
                                    Question {this.state.questionNum}:
                                </h3>
                                <h2 className='trivia__question'>
                                    {this.state.question}
                                </h2>
                                <div className='trivia__buttons-container'>
                                    <button className='trivia__buttons' onClick={this.checkAnswer} data_id='1'>
                                        {this.state.a1}
                                    </button>
                                    <button className='trivia__buttons' onClick={this.checkAnswer} data_id='2'>
                                        {this.state.a2}
                                    </button>
                                    <button className='trivia__buttons' onClick={this.checkAnswer} data_id='3'>
                                        {this.state.a3}
                                    </button>
                                    <button className='trivia__buttons' onClick={this.checkAnswer} data_id='4'>
                                        {this.state.a4}
                                    </button>
                                </div>
                            </div>) : 
                            ('')
                        }
                    </div>
                    <div>
                        {this.state.gameReset ? 
                            (<div>
                                <div className='trivia__score'>
                                    <h1>
                                        Final Score - {this.state.playerScore} / {' '}{this.state.totalQuestions - 1}
                                    </h1>
                                    <h3>
                                        {((this.state.playerScore / this.state.totalQuestions) * 100).toFixed(2)}%
                                    </h3>
                                </div>
                            </div>) : 
                            ('')
                        }
                    </div>
                </div>) : 
                ('')
            }
        </div>
        <MouseTooltip offsetX={5} offsetY={5}>
            <div className='title-screen__space-surfer-container hovering'>
                <img className='title-screen__astronaut' src={spaceSurfer} alt='astronaut wearing white an orange suit riding a rocket surfboard' />
            </div>
            </MouseTooltip>
        </div>
    );
  }
}

export default Trivia;