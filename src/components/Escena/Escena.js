import { DivFrase } from "./Escena.styled";

export default function Escena(props) {

    return (
        <DivFrase>
            {props.frase}
        </DivFrase>
    )
}