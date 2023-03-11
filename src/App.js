import Bienvenida from './components/Bienvenida/Bienvenida';
import Escena from './components/Escena/Escena';
import Botones from './components/Botones/Botones';
import { DivFondoEscenas } from './components/Escena/Escena.styled';
import { dadesHistoria } from './dadesHistoria';
import { useState } from 'react';

function App() {
  const [isShown, setIsShown] = useState(true);

  const [numFrase, setNumFrase] = useState(0);

  const selectNext = () => {
    setNumFrase((prevFrase) => {
      return (prevFrase < dadesHistoria.length - 1) ? (prevFrase + 1) : prevFrase;
    })
  }

  const selectPrevious = () => {
    setNumFrase((prevFrase) => {
      return (prevFrase === 0) ? 0 : (prevFrase - 1);
    })
  }

  const empezarAlClicar = () => setIsShown((isShownInicial => !isShownInicial));

  const bgImagen = () => {
    const imgBg = `/img/${dadesHistoria[numFrase].img}`;
    console.log("imgBg", imgBg);
    return imgBg;
  }


  return (
    <div>
      {isShown && <Bienvenida handleClick={empezarAlClicar} />}
      {!isShown && <DivFondoEscenas imagen={bgImagen()}>
        <Botones selectPrevious={selectPrevious} selectNext={selectNext} />
        <Escena data={dadesHistoria} numLineaActual={numFrase} />
      </DivFondoEscenas>
      }

    </div>
  );
}

export default App;
