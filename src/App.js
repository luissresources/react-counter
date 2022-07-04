import logoLuissdev from './imagenes/logo.png'
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react';

function App() {
  // let counterClick = 0;
  // const counter = document.querySelector('.counter');
  /* const managerClick = (e) => {
    if (e.target.className === 'button-click' ? counterClick += 1 : counterClick = 0 );
    const counter = document.querySelector('.counter');
    counter.textContent = counterClick;
    console.log(counterClick);
  } */

  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    // counterClick += 1
    // counter.textContent = counterClick;
    setCounter(counter + 1);
  };
  const resetCounter = () => {
    // counterClick = 0;
    // counter.textContent = counterClick;
    setCounter(0);
  }

  return (
    <div className="App">
      <div className='logo-container'>
        <img
          className= 'logo'
          src= {logoLuissdev}
          alt='logo' />
      </div>
      <div className='main-container'>
        <Contador 
          counter = {counter}
        />
        <Boton
          text = 'Click'
          isButtonClick= {true}
          managerClick = {incrementCounter} />
        <Boton 
          text = 'Reset'
          isButtonClick = {false}
          managerClick  = {resetCounter} />
      </div>
    </div>
  );
}

export default App;