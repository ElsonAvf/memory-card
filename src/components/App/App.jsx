import { useState } from 'react' 
import Menu from './../Menu/Menu.jsx';
import Board from './../Board/Board.jsx';
import { Global } from './Global.style.js';

export default function App() {
  const [displayRestartMenu, setDisplayRestartMenu] = useState(false)
  const [result, setResult] = useState(null)
  
  return (
    <>
      <Global />
      {
        displayRestartMenu && <Menu message={result === 'win' ? 'You Won' : 'Gameover'} setDisplay={setDisplayRestartMenu} />
      }
      <Board setResult={setResult} setDisplay={setDisplayRestartMenu} />
    </>
  )
}