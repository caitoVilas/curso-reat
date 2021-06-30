import React, {Component} from 'react';
import Data from '../Helpers/Data.json'

function ElementList(props) {
    return(
       
          <li>
              <a href={props.el.web} target="_blank" rel="noreferrer">{props.el.name}</a>
          </li>
       
    );
}

export default class RenderizadoElementos extends Component{

    constructor(props){
        super(props);
        this.state = {
            seasons: ["Primavera", "Verano", "Otoño", "Invierno"]
        }
    }
    render(){
        console.log(Data);
        return(
            <>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>
                   {this.state.seasons.map((el) => (<li key={el}>{el}</li>))}
                </ol>
                <h3>Framework front-end Javascript</h3>
                <ul>
                    {Data.frameworks.map((el) => (<ElementList key={el.id} el={el} />))}
                </ul>
            </>
        );
    }
}