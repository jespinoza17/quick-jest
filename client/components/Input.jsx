import React from 'react';
import Func from './Func.jsx'

export default function Input(props) {
  const { funcArray, setFunc, setTest, inputTest } = props
  
   let newFuncList = funcArray.map((el,index) => {
    return <Func key={el.functionName + index} index={index} functions={funcArray} 
    setFunc={setFunc} name={el.functionName} tests={el.tests} id={index}
    setTest={setTest} inputTest={inputTest}
    />
  })

  return(
    <div className = 'input-area'>
      <div id = 'add-func'>
        <input type = 'text'>

        </input>
        <button>
          add func
        </button>
      </div>
      {newFuncList}
    
    </div>
  )
}