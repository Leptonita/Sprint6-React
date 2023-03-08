import { DivFrase } from "./Escena.styled";

export default function Escena(props) {

    const dadesTextos = props.data;
    console.log(props.numLineaActual)

    const frases = dadesTextos.map((frase, index) => {

        const isSelected = ((props.numLineaActual === index));

        const lineaFrase = <DivFrase key={index} highlight={isSelected} > {frase} </DivFrase>

        return lineaFrase;

    });



    return (
        <>
            {frases}
        </>
    )
}