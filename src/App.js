import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Aayush } from './routes/aayush';
import { Home } from './routes/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aayush' element={<Aayush />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
