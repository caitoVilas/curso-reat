import React from 'react';
import styled, {css, keyframes, ThemeProvider, createGlobalStyle} from 'styled-components';

export default function ComponentesEstilizados(props){
    let mainColor = "#db7093"
    let mainAlphaColor = "#db709380";
    const fadeIn = keyframes`
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    `
    const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${(props) => props.color || "#000"};
    background-color: ${mainColor};
    transition: all .5s ease-out;
    animation: ${fadeIn} 2s ease-out;
    ${(props) => props.isButton && css`
    margin: auto;
    max-width: 50%;
    border-radius: 0.25rem;
    cursor: pointer;
    `}
    &:hover{
        background-color: ${mainAlphaColor};
    }
    `
    const light = {
        color: "#222",
        bgColor: "#ddd"
    };
    const dark = {
        color: "#ddd",
        bgColor: "#222"
    }
    const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({theme}) => theme.color};
    background-color: ${({theme}) => theme.bgColor};
    `;
    const BoxRounded = styled(Box)`
    border-radius: 1rem;
    `;

    const globalStyle = createGlobalStyle`
    h2{
        padding: 2rem;
        background-color: #fff;
        color: #61dafb;
        text-transform: uppercase;
    }
    `;
    return(
        <>
            <globalStyle />
            <h2>Styled - Components</h2>
            <MyH3>Hola soy un componente estilizado con styled-components</MyH3>
            <MyH3 color="#61dafb">Otro componente estilizado</MyH3>
            <MyH3 isButton="true">Soy un h3 estilizado como boton</MyH3>
            <ThemeProvider theme={light}>
                <Box>Soy un caja light</Box>
                <BoxRounded>Caja ligh redondeada</BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <Box>Soy una caja dark</Box>
                <BoxRounded>Caja dark redondeada</BoxRounded>
            </ThemeProvider>
        </>
    );
}