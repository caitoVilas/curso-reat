import React, { createRef, useRef } from 'react';

export default function Referencias(props){

    let refMenu = useRef();
    let refMenuBtn = useRef();
    const handletoggleMenu =(e) => {
        if(refMenuBtn.current.textContent === "Menu"){
            refMenuBtn.current.textContent = "Cerrar";
            refMenu.current.style.display = "block"
        }else{
            refMenuBtn.current.textContent = "Menu";
            refMenu.current.style.display = "none"
        }
    }
    return(
        <>
            <h2>Referencias</h2>
            <button id="menu_btn" ref={refMenuBtn} onClick={handletoggleMenu}>Menu</button>
            <nav id="menu" ref={refMenu} style={{display:'none'}}>
              <a href="#" >Seccion 1</a><br />
              <a href="#" >Seccion 2</a><br />
            </nav>
        </>
    );
}