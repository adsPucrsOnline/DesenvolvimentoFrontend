import logo from './logo.svg';
import './App.css';
import Contador from './components/contador/contador';
import ContadorDois from './components/contador-dois/contador-dois';
import TiposComentarios from './components/tipos-comentarios/tipos-comentarios';

const App = () => {
  return ( 
    <>
    <div className="App">
     <Contador/>
     <ContadorDois />
     <TiposComentarios />
    </div>
    </>
  );
}

export default App;
