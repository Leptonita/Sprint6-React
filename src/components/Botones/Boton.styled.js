import styled from "styled-components";

export const Btn = styled.button`
width: 47%;
height: 50px;
font-size: 1.2rem;
font-weight: bold;
border: 2px solid gray;
background-color: #eee;
margin: 10px;
cursor: pointer;

&:hover {
    background-color: #e1cbde;
    color: magenta;
}
`;

export const DivBotones = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;