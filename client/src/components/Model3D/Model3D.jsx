import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Model3D/Model3D.scss';
import spaceSurfer from '../../assets/images/space-surfer.png';
import MouseTooltip from 'react-sticky-mouse-tooltip';

const URL = 'http://localhost:8383/objects/';

class Model3D extends React.Component {
    state = {
        current3DModel: [],
    };

    componentDidMount() {
        const { match } = this.props;
        const ID = match.params.id;
        if (ID !== this.state.current3DModel.id) {
            axios.get(URL + ID)
            .then(({ data }) => {
                this.setState({
                    current3DModel: data,
                });
            })
            .catch(error => console.log(error));
        };
    };

    componentDidUpdate(prevProps, prevState) {
        const { match } = this.props;
        const ID = match.params.id;
        console.log(ID);
        if (ID !== this.state.current3DModel.id) {
            axios.get(URL + ID)
            .then(({ data }) => {
                this.setState({
                    current3DModel: data,
                });
            })
            .catch(error => console.log(error));
        };
    };

    render() {
        return (
            <div>
            <div className='model-3d__nav'>
                    <Link to='/'><button className='model-3d__nav-button'>HOME</button></Link>
                    <Link to={`/model/${this.state.current3DModel.id + 1}`}><button className='model-3d__nav-button'>NEXT</button></Link>
                </div>
            <div className='model-3d'>
                <h1 className='model-3d__title'>{this.state.current3DModel.name}</h1>
                <div className='model-3d__container'>
                    <iframe title={this.state.current3DModel.name} src={this.state.current3DModel.model3D} width="50%" height="450px" frameBorder="0" />
                </div>
            </div>
            <MouseTooltip offsetX={5} offsetY={5}>
            <div className='model-3d__space-surfer-container hovering'>
                <img className='model-3d__astronaut' src={spaceSurfer} alt='astronaut wearing white an orange suit riding a rocket surfboard' />
            </div>
            </MouseTooltip>
            </div>
        );
    }

}

export default Model3D;