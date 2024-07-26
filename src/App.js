import React from 'react';
import './App.css';
import SearchBar from './component/SearchBar/SearchBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import GenDisplay from './pages/GenDisplay';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product">
            <Route path=":GenId" element={<GenDisplay />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
