
import { Btn, DivBotones } from "./Boton.styled"

export default function Botones({ selectPrevious, selectNext }) {

    return (
        <DivBotones>
            <Btn onClick={selectPrevious}> Anterior </Btn>
            <Btn onClick={selectNext}> Següent </Btn>
        </DivBotones>
    )
}