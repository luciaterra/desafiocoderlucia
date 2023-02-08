import React from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './component/navbar/Navbar';
import ItemListContainer from './component/itemListContainer/ItemListContainer';

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos!" />
    </div>
  )
}

export default App
