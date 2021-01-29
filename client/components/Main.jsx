import React from 'react';
import Input from './Input.jsx';
import Mirror from './Mirror.jsx';
import '../codeMirror.css'

export default function Main(props) {
  const { funcArray, setFunc, setInput, inputField } = props

  return(
    <div className = 'main-area'>
     <Input funcArray = {funcArray} setFunc = {setFunc} setInput = {setInput} inputField = {inputField}/>
     <Mirror funcArray= {funcArray}/>
    </div>
  )
}