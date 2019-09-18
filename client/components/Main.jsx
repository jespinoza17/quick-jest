import React from 'react';
import Input from './Input.jsx';
import Mirror from './Mirror.jsx';


export default function Main(props) {
  const { funcArray, setFunc, setTest, inputTest } = props

  return(
    <div className = 'main-area'>
     <Input funcArray = {funcArray} setFunc = {setFunc} setTest = {setTest} inputTest = {inputTest}/>
     <Mirror/>
    </div>
  )
}