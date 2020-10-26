import React, { Component } from 'react';
import '../CardGame/CardGame.scss';
import alienImage from '../../assets/images/memory-alien.png';
import astronautImage from '../../assets/images/memory-astronaut.png';
import planetImage from '../../assets/images/memory-planet.png';
import rocketImage from '../../assets/images/memory-rocket.png';
import spaceshipImage from '../../assets/images/memory-spaceship.png';
import starImage from '../../assets/images/memory-star.png';
import cardLogo from '../../assets/images/memory-logo.png';

class CardGame extends Component {
    state = { isActive: false };

    flipCard = () => {
        console.log('I was clicked!');
        console.log(this);
        this.setState({ isActive: !this.state.isActive });
    }

    render() {

        return (
            <div className='card-game'>
                <div onClick={this.flipCard} className={this.state.isActive ? 'card-game__matching-card flip' : 'card-game__matching-card'}>
                    <img className='card-game__matching-card-front' src={alienImage} alt='alien' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className={this.state.isActive ? 'card-game__matching-card flip' : 'card-game__matching-card'}>
                    <img className='card-game__matching-card-front' src={alienImage} alt='alien' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className={this.state.isActive ? 'card-game__matching-card flip' : 'card-game__matching-card'}>
                    <img className='card-game__matching-card-front' src={astronautImage} alt='astronaut' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className={this.state.isActive ? 'card-game__matching-card flip' : 'card-game__matching-card'}>
                    <img className='card-game__matching-card-front' src={astronautImage} alt='astronaut' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className={this.state.isActive ? 'card-game__matching-card flip' : 'card-game__matching-card'}>
                    <img className='card-game__matching-card-front' src={planetImage} alt='planet' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className={this.state.isActive ? 'card-game__matching-card flip' : 'card-game__matching-card'}>
                    <img className='card-game__matching-card-front' src={planetImage} alt='planet' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className={this.state.isActive ? 'card-game__matching-card flip' : 'card-game__matching-card'}>
                    <img className='card-game__matching-card-front' src={rocketImage} alt='rocket' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className={this.state.isActive ? 'card-game__matching-card flip' : 'card-game__matching-card'}>
                    <img className='card-game__matching-card-front' src={rocketImage} alt='rocket' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className={this.state.isActive ? 'card-game__matching-card flip' : 'card-game__matching-card'}>
                    <img className='card-game__matching-card-front' src={spaceshipImage} alt='spaceship' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className={this.state.isActive ? 'card-game__matching-card flip' : 'card-game__matching-card'}>
                    <img className='card-game__matching-card-front' src={spaceshipImage} alt='spaceship' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className={this.state.isActive ? 'card-game__matching-card flip' : 'card-game__matching-card'}>
                    <img className='card-game__matching-card-front' src={starImage} alt='star' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className={this.state.isActive ? 'card-game__matching-card flip' : 'card-game__matching-card'}>
                    <img className='card-game__matching-card-front' src={starImage} alt='star' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
            </div>
        );
    }
}

export default CardGame;