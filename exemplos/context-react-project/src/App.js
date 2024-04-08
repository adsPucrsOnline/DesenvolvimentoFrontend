import { useReducer } from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import { DataContext, DataDispatchContext } from './context/data-context';
import './App.css';
import { defaultData } from './data';
import { dataReducer } from './reducer';

function App() {
  const [data, dispatch] = useReducer(
    dataReducer,
    defaultData
  );

  return (
    <DataContext.Provider value={data}>
      <DataDispatchContext.Provider value={dispatch}>
        <div className="App">
          <header className="App-header">
            <Navbar />
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </DataDispatchContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
