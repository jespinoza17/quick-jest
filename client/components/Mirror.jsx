import React, {useState, useEffect} from 'react';
import CodeMirror from 'react-codemirror';

import 'codemirror/theme/mdn-like.css';
import 'codemirror/mode/javascript/javascript.js';
import  FileSaver from 'file-saver';
import formatString from '../stringFormat.js';

const mirror = (props) => {
  const [js, setJs] = useState('');
  const {funcArray } = props;
  useEffect(() => {

    let formattedJs = formatString(funcArray);
    setJs(formattedJs)
  })

  const fetchAndDownload = (formattedString) => {
    console.log(formattedString)
    fetch('/generate', {
      method: 'POST',
      mode: 'cors',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({formattedString})
    })
    .then((file)=>{
      return file.blob()      
      // download the file
    })
    .then((blob)=>{
      return FileSaver.saveAs(blob,"quickjest.test.js")
    })
    .catch((e=>console.log('unable to generate file', e)))
  } 

  return (
    <div className='code'>
      <CodeMirror
        options={{
          value: js,
          mode: 'javascript',
          theme: 'mdn-like',
          lineNumbers: true,
          readOnly: true,
          tabsize: 2,
          lineWrapping: true,
          autoRefresh:true,
        }}
      />
      <div className = 'code'>
        <div className = 'code-bottom'>
          <button id = 'generate-btn' onClick = {()=>fetchAndDownload(js)}>Generate Jest Tests</button>
        </div>
      </div>
    </div>
  )
}

export default mirror;