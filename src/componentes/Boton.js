import React from 'react';
import '../stylesheets/Boton.css';

function Boton({text, isButtonClick, managerClick   }) {
    return (
      <button className={isButtonClick ? 'button-click' : 'button-reset'} onClick={ managerClick}>
        {text}
      </button>
    )
}

export default Boton;