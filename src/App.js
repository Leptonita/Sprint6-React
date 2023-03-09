import Bienvenida from './components/Bienvenida/Bienvenida';
import Escena from './components/Escena/Escena';
import Botones from './components/Botones/Botones';
import { dadesTextos } from './dadesTextosHistoria';
import { useState } from 'react';

function App() {
  const [isShown, setIsShown] = useState(true);
  //const [empezarHistoria, setEmpezarHistoria] = useState(false);
  const [numFrase, setNumFrase] = useState(0);

  const selectNext = () => {
    setNumFrase((prevFrase) => {
      return (prevFrase < dadesTextos.length - 1) ? (prevFrase + 1) : prevFrase;
    })
  }

  const selectPrevious = () => {
    setNumFrase((prevFrase) => {
      return (prevFrase === 0) ? 0 : (prevFrase - 1);
    })
  }

  const empezarAlClicar = () => setIsShown((isShownInicial => !isShownInicial));



  return (
    <div>
      {isShown && <Bienvenida handleClick={empezarAlClicar} />}
      {isShown || <Botones selectPrevious={selectPrevious} selectNext={selectNext} />}
      {isShown || <Escena data={dadesTextos} numLineaActual={numFrase} />}
    </div>
  );
}

export default App;
