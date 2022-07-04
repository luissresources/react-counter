import React from 'react';
import '../stylesheets/Contador.css';

function Contador({counter}){
    return (
      <div className='counter-container'>
        <p className='counter'>{counter}</p>
      </div>
    )
}

export default Contador;