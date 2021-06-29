import React from 'react';
import propTypes from 'prop-types';

export default function Propiedades(props){
    return(
        <>
            <h2>Propiedades</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano? "Verdadero": "Falso"}</li>
                <li>{props.arreglo}</li>
                <li>{props.objeto.nombre + " " + props.objeto.correo}</li>
                <li>{props.elemento}</li>
                <li>{props.arreglo.map(props.funcion)}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </>
    )
}
Propiedades.propTypes = {
    numero: propTypes.number
}