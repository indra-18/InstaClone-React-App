
import React from 'react';
import './App.css';
import AppRouter from './Routers/AppRouter';

import {PostContext} from './components/contexts/postContext';
import PostContextProvider from './components/contexts/postContext';


function App() {
  return (
    <PostContextProvider>
      <div className="App-container">
        <AppRouter />
      </div>
    </PostContextProvider>
  );
}


export default App;
