import React from 'react';
import '../CardGame/CardGame.scss';
import alienImage from '../../assets/memory-alien.png';
import astronautImage from '../../assets/memory-astronaut.png';
import planetImage from '../../assets/memory-planet.png';
import rocketImage from '../../assets/memory-rocket.png';
import spaceshipImage from '../../assets/memory-spaceship.png';
import starImage from '../../assets/memory-star.png';
import cardLogo from '../../assets/memory-logo.png';

class CardGame extends React.Component {
    
    flipCard = () => {
        console.log('I was clicked!');
        console.log(this);
    }

    render() {

        return (
            <div className='card-game'>
                <div onClick={this.flipCard} className='card-game__matching-card'>
                    <img className='card-game__matching-card-front' src={alienImage} alt='alien' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className='card-game__matching-card'>
                    <img className='card-game__matching-card-front' src={alienImage} alt='alien' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className='card-game__matching-card'>
                    <img className='card-game__matching-card-front' src={astronautImage} alt='astronaut' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className='card-game__matching-card'>
                    <img className='card-game__matching-card-front' src={astronautImage} alt='astronaut' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className='card-game__matching-card'>
                    <img className='card-game__matching-card-front' src={planetImage} alt='planet' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className='card-game__matching-card'>
                    <img className='card-game__matching-card-front' src={planetImage} alt='planet' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className='card-game__matching-card'>
                    <img className='card-game__matching-card-front' src={rocketImage} alt='rocket' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className='card-game__matching-card'>
                    <img className='card-game__matching-card-front' src={rocketImage} alt='rocket' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className='card-game__matching-card'>
                    <img className='card-game__matching-card-front' src={spaceshipImage} alt='spaceship' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className='card-game__matching-card'>
                    <img className='card-game__matching-card-front' src={spaceshipImage} alt='spaceship' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className='card-game__matching-card'>
                    <img className='card-game__matching-card-front' src={starImage} alt='star' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
                <div onClick={this.flipCard} className='card-game__matching-card'>
                    <img className='card-game__matching-card-front' src={starImage} alt='star' />
                    <img className='card-game__matching-card-back' src={cardLogo} alt='space surfer logo' />
                </div>
            </div>
        );
    }
}

export default CardGame;