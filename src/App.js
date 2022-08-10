import React from 'react';
import './App.css';
import { Card } from './components/Card';




const App = ()=>{
  return(
    <div className='card-container'>
      
      <Card image="https://rehansaeed.com/images/hero/CSS-1600x900.png" />
    
      <Card />
      <Card /> 

    </div>

  )
}

export default App;
