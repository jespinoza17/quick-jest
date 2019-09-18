
import React, {useState} from 'react';
import Right from './Right.jsx'
import Func from './Func.jsx'
import Nav from './Nav.jsx';
import Main from './Main.jsx';
import './styles.css'
import 'tachyons'
function App() {
  const [functions, setFunc] = useState([{functionName:'test', tests: ['should render an object']}])
  const [inputField, setInput] = useState('')
  const [inputTest, setTest] = useState('')

  const addFun = () =>{
    let newFunctions = [...functions];
    newFunctions.push({'functionName':inputField, tests:[]})
    setFunc(newFunctions);
    setInput('');
  }
  
  const inputChange = (e)=>{
    setInput(e.target.value)
  }

  let newFuncList = functions.map((el,index) => {
    return <Func key={el.functionName + index} index={index} functions={functions} 
    setFunc={setFunc} name={el.functionName} tests={el.tests} id={index}
    setTest={setTest} inputTest={inputTest}
    />
  })
  return(

    <div className = 'wrapper'>
      <Nav/>
      <Main/>
    </div>
      )
}

export default App
