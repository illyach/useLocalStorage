import React, { Component } from 'react'
import { useLocalStorage } from './useLocalStorage';
import './App.css';

function App() {
 
  const {setStorageItem: set, removeStorageItem: remove, clearStorage: clear} = useLocalStorage();

  return (
    <div className="App">

    <button onClick={() => set('user', 'illyach')}>Register user</button>

    <br/>
    <button onClick={() => remove('user')}>Remove user</button>
    <br/>
    <button onClick={() => clear('user')}>Clear all users</button>

    </div>
  );
}

export default App;
