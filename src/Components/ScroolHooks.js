import React, { useEffect, useState } from 'react';

export default function ScroolHooks(pops){
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        //console.log("moviendo scroll");
        const detectarScroll = () => setScrollY(window.pageYOffset);
        window.addEventListener('scroll', detectarScroll);
    },[scrollY]);
    useEffect(() => {
        //console.log("fase de montaje");
    },[]);
    return(
        <>
            <h2>Scrool - useEfect</h2>
            <p>Scrool Y del navegador px: {scrollY}</p>
        </>
    );
}