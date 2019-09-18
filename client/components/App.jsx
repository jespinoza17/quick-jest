import React, {useState} from 'react';
import Right from './Right.jsx'
import Func from './Func.jsx'
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
    <div style={{width:300}}>
      {newFuncList}
      <div>
        <div className='dib br3 pa3 ma2 bw2 shadow-5'>
          <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" 
            type="text" aria-describedby="name-desc" value={inputField} onChange={inputChange}>
          </input>
          <button className='addTest bg-light-green ma2 grow bw2 shadow-5' onClick={addFun}>
            add
          </button>
        </div>
      </div>
    </div>
  )
}

export default App