import React from 'react';
import './App.css';
import Chat from './Chat';
import Toolbar from './Toolbar';

function App() {
  return (
    <div className="app">
      <div className="app-body">
        <Toolbar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
