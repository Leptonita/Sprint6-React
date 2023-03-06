import Escena from './components/Escena/Escena';
import { dadesTextos } from './dadesTextosHistoria';

function App() {
  //<p key={index}>{frase}</p>

  const frases = dadesTextos.map((frase, index) => <Escena frase={frase} key={index} />);

  return (
    <div >
      {frases}
    </div>
  );
}

export default App;
