import logo from './logo.svg';
import './App.css';
import Gancho from './components/gancho/gancho';
import GanchoUsestate from './components/gancho-usestate/gancho-usestate';
import GanchoUseeffect from './components/gancho-useeffect/gancho-useeffect';

function App() {
  return (
    <div className="App">
      <GanchoUseeffect />
    </div>
  );
}

export default App;
