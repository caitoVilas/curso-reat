import React, {Component} from 'react';

function Boton(props){
    return(
        <button onClick={props.myOnClick}>Boton hecho componente</button>
    );
}

export default class MasSobreEventos extends Component{
    
    handleClick = (e, mensaje) => {
        console.log(e);
        console.log(e.target);
        console.log(e.nativeEvent);
        console.log(e.nativeEvent.target);
        console.log({mensaje});
    };
    render(){
        return(
            <>
                <h2>Mas sobre Eventos</h2>
                <button onClick={(e) =>this.handleClick(e, "Pasando parametro desde un evento")}>Saludar</button>
                <Boton myOnClick={(e) => this.handleClick(e, "Pasado como una prop")} />
            </>
        );
    }
}