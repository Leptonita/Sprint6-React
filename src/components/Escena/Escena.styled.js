import styled from "styled-components";

export const DivFrase = styled.div`
width: 95%;
margin: 5px auto;
padding: 5px;
border: 2px solid black;
border-radius: 20px;
text-align: center;
background-color: ${({ highlight }) => highlight ? "#ffe4fc" : "white"};
    
`;

//background-image: url('/img/1.jpg');
export const DivFondoEscenas = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${(props) => props.imagen}) ;

background-repeat: no-repeat;
background-size: 100% 100%;
`;