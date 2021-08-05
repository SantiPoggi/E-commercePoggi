import React from 'react'
import { Header } from "./componentes/Header";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import {Paginas} from "./componentes/Paginas";
import "boxicons";

function App() {

  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header />
      <Paginas />
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
