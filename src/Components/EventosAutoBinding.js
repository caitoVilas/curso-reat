import { resetWarningCache } from 'prop-types';
import React, {Component} from 'react';

export default class EventosAutoBinding extends Component{
    state = {
        contador: 0
    };
    sumar = (e) =>{
        this.setState({
            contador: this.state.contador + 1
        })
    };
    restar = (e) => {
        this.setState({
            contador: this.state.contador - 1
        })
    };
    render(){
        return(
            <>
             <h2>Eventos Auto Binding ES7</h2>
             <h3>{this.state.contador}</h3>
             <nav>
                 <button onClick={this.sumar}> + </button>
                 <button onClick={this.restar}> - </button>
             </nav>
            </>
        );
    }
}