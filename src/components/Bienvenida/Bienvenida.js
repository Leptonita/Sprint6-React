import { DivWelcome, Message } from "./Bienvenida.styled";
import { Btn } from "../Botones/Boton.styled";

export default function Bienvenida({ handleClick }) {
    return (

        <DivWelcome>
            <Message>Benvinguts a aquesta aplicació interactiva on et mostrarem una història d'herois, naus espacials, ... </Message>
            <Message>Per començar l'aventura prem el botó</Message>
            <Btn onClick={() => handleClick()}>COMENÇAR</Btn>
        </DivWelcome >
    )
}