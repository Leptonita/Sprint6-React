import Escena from './components/Escena/Escena';
import { dadesTextos } from './dadesTextosHistoria';

function App() {

  const frases = dadesTextos.map((frase, index) => <p key={index}>{frase}</p>);

  return (
    <div className="App" >
      <Escena frase={frases} />
    </div>
  );
}

export default App;
