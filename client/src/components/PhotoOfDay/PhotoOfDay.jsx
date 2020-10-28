import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import spaceSurfer from '../../assets/images/space-surfer.png';
import MouseTooltip from 'react-sticky-mouse-tooltip';
import '../PhotoOfDay/PhotoOfDay.scss';

const URL = "https://api.nasa.gov/planetary/apod?api_key=jQlRuqUB3BGtcVbjLNoEX5VIwNahu4vtRfek9iQG";

class PhotoOfDay extends Component {
    state = {
        currentPhotoContent: [],
    };

    componentDidMount() {
            axios.get(URL)
            .then(({ data }) => {
                console.log(data)
                this.setState({
                    currentPhotoContent: data
                });
            })
            .catch(error => console.log(error));
    };

    render() {
        return(
            <div>
                <div className='photo__nav'>
                    <Link to='/'><button className='photo__nav-button'>HOME</button></Link>
                </div>
                <div className='photo'>
                    <h1 className='photo__title'>{this.state.currentPhotoContent.title}</h1>
                    <img className='photo__image' src={this.state.currentPhotoContent.url} alt={this.state.currentPhotoContent.title} />
                    <p className='photo__explanation'>{this.state.currentPhotoContent.explanation}</p>
                </div>
                <MouseTooltip offsetX={5} offsetY={5}>
                    <div className='photo__space-surfer-container hovering'>
                        <img className='photo__astronaut' src={spaceSurfer} alt='astronaut wearing white an orange suit riding a rocket surfboard' />
                    </div>
                </MouseTooltip>
            </div>
        )
    }
}

export default PhotoOfDay;