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