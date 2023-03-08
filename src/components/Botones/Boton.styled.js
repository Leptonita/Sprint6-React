import styled from "styled-components";

export const Btn = styled.button`
width: 47%;
height: 50px;
font-size: 1.2rem;
border: 2px solid gray;
background-color: #eee;
margin:5px;
cursor: pointer;

&:hover {
    background-color: #ddd;
    color: magenta;
}
`;

export const DivBotones = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;