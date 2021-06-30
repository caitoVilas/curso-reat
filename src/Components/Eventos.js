import React,{Component} from 'react';

export default class Eventos extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        };
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }
    sumar(){
        console.log("sumando");
        this.setState({
            contador: this.state.contador + 1
        })
    }
    restar(){
        this.setState({
            contador: this.state.contador - 1
        });
    }
    render(){
        return(
            <>
                <h2>Eventos en componentes de clase</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}> +</button>
                    <button onClick={this.restar}> -</button>
                </nav>
            </>
        );
    }
}