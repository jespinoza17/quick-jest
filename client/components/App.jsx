import React, {useState} from 'react';
import Right from './Right.jsx'
import Left from './Left.jsx'
import './styles.css'
import 'tachyons'
function App() {
  const [State, setState] = useState(null)
  const addFun = () =>{

  }
  return(
    <div>
    <Right/>
    <Left/>
    </div>
  )
}

export default App