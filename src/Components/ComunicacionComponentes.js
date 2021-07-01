import React, {Component} from 'react';

export default class ComunicacionComponentes extends Component{
    state = {
        contador: 0
    };

    incrementarContador = (e) => {
        this.setState = {
            contador: this.state.contador +1
        }
    };

    render(){
        return(
            <>
                <h2>Comunicacion entre componentes</h2>
                <p>Contador : <b>{this.state.contador}</b></p>
                <Hijo msg="Mensaje para componente hijo 1"
                      incrementarContador={this.incrementarContador}
                />
                <Hijo msg="Mensaje para componente hijo 2"
                      incrementarContador={this.incrementarContador}
                />
            </>
        );
    }
}

function Hijo(props){
    return(
        <>
            <h3>{props.msg}</h3>
            <button onClick={props.incrementarContador}> + </button>
        </>
    );
}