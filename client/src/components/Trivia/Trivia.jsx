import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Trivia/Trivia.scss';

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
                console.log(data)
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

        console.log('quesitonNum', this.state.questionNum);

        if (this.state.questionNum < this.state.totalQuestions) {
            this.loadNewQuestion();
        } else {
            this.gameOver();
        }
    };

    gameOver = () => {
        console.log('Game over');
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
        <div>
        <div className='nav'>
            <Link to='/'><button className='nav__button'>Home</button></Link>
            <Link to='/trivia'><button className='nav__button'>Solar System Trivia Game</button></Link>
        </div>
        <div className='trivia'>
            <h1 id='trivia-intro'>Welcome To Solar System Trivia!</h1>
            <h3 className='trivia__greeting'>
                Hello, Space Surfer! Are you ready to play?
            </h3>
            {this.state.initialGameState ? ('') : (<button onClick={this.selectionReset}>START OVER</button>)}
            <div>
                {this.state.initialGameState ? (<a className='trivia__button' onClick={this.showGame}>YES!</a>) : ('')}
            </div>
        </div>
        <div>
            <div>
                {this.state.gameChoice ? (<a className='trivia__button' onClick={this.solarEdition}>PLAY</a>) : ('')}
            </div>
        </div>
        <div>
            {this.state.gameStart ? (<a id='game-start-load' className='trivia__start' onClick={this.startGame}>NEW GAME</a>) : ('')}
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
                                    Q. {this.state.questionNum}
                                </h3>
                                <h2 className='trivia__question'>
                                    {this.state.question}
                                </h2>
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
                            </div>) : 
                            ('')
                        }
                    </div>
                    <div>
                        {this.state.gameReset ? 
                            (<div>
                                <div className='trivia__score'>
                                    <h1>
                                        Final Score - {this.state.playerScore} /{' '}{this.state.totalQuestions}
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
        </div>
    );
  }
}

export default Trivia;