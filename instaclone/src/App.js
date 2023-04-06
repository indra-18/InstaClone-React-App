
import React from 'react';
import './App.css';
import AppRouter from './Routers/AppRouter';

import { PostContext } from './components/contexts/PostContext';


function App() {
  return (
    <PostContext >
      <div className="App-container">
        <AppRouter />
      </div>
    </PostContext>
  );
}


export default App;
