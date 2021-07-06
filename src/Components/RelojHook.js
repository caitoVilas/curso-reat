import React, { useEffect, useState } from 'react';

export default function RelojHooks(){
    const [hour, setHour] = useState(0);
    const [visible, setVisible] = useState(false)
    useEffect(() =>{
       let temporizador;
       if(visible){
           temporizador = setInterval(() => {
               setHour(new Date().toLocaleTimeString());
           },1000);
       } else{
           clearInterval(temporizador);
       }
       return(
        () => {
            console.log("fase de desmontaje");
            clearInterval(temporizador);
        }
       );
    },[visible]);
    return(
        <>
            <h2>Reloj con Hook</h2>
            {visible && <Reloj hora={hour} /> }
            <nav>
                <button onClick={() => setVisible(true)}>Iniciar</button>
                <button onClick={() => setVisible(false)}>Detener</button>
            </nav>
        </>
    );
}

function Reloj({hora}){
    return(
        <h3>{hora}</h3>
    );
}