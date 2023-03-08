import Escena from './components/Escena/Escena';
import Botones from './components/Botones/Botones';
import { dadesTextos } from './dadesTextosHistoria';
import { useState } from 'react';

function App() {

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



  return (
    <div>
      <Botones selectPrevious={selectPrevious} selectNext={selectNext} />
      <Escena data={dadesTextos} numLineaActual={numFrase} />
    </div>
  );
}

export default App;
