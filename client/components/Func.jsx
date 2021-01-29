import React, {useState} from 'react';

function Func(props) {
  const { funcArray, setFunc} = props

  const [inputValue, setInputValue] = useState('')

  const addTest = ()=>{
    let newFuncArr=[...props.functions]
    newFuncArr[props.index]["tests"].push(inputValue)
    setFunc(newFuncArr);
    setInputValue('')
  }
  let testArr = []
  props.tests.forEach((test, i)=>{
    testArr.push(
    <div key={i} className='testBox'>  
      <p className='tests bg-white hover-bg-light-blue black ma2'> {test}
      </p>
      <button className='deleteTest grow' onClick={()=>{
        let newFuncArr=[...props.functions]
        delete newFuncArr[props.index]["tests"][i]
        props.setFunc(newFuncArr);
      }}>
        d
      </button>
    </div>
  )})

  return(
   <div className ='Func dib br3 pa3 ma2 bw2 shadow-5'>
     <div className = 'input-and-add'>
      <input className="input-reset ba b--black-20 pa2 mb2 db" 
      type="text" aria-describedby="name-desc" value = {inputValue} onChange={(e)=>{  
       setInputValue(e.target.value)
      }}>
      </input>
      
      <button className='addTest bg-#fff ma2 grow bw2 shadow-5' onClick={addTest}>
        +
      </button>
     </div>
      <p className = 'func-name'>
        {props.name}
      </p>
      {testArr}
    </div>
  )
}

export default Func;