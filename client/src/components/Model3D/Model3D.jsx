import React from 'react';
import axios from 'axios';
import '../Model3D/Model3D.scss';

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

    render() {
        return (
            <div className='model-3d'>
                <div className='model-3d__container'>
                    <iframe title={this.state.current3DModel.name} src={this.state.current3DModel.model3D} width="100%" height="450px" frameBorder="0" />
                </div>
            </div>
        );
    }

}

export default Model3D;