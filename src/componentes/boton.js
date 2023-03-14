import React from 'react';
import '../css/boton.css';

class boton extends React.Component {
    render() {
        return(
            <button className={this.props.esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
                onClick={this.props.manejarClic}>
                {this.props.texto}
            </button>
        );
    }
};

export default boton;