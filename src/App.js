import './App.css';
import logoErick from './imagenes/logo.png';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () =>{
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='logo-container'>
        <img className='logo'
        src={logoErick}
        alt='Logo freecodeCamp' />
      </div>
      <div className='container'>
        <Contador numClics={numClics} />
        <Boton 
        texto = 'Clic'
        esBotonDeClic = {true}
        manejarClic={manejarClic}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
