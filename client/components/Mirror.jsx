import React, {useState, useEffect} from 'react';
// import {UnControlled as CodeMirror} from 'react-codemirror2'
import CodeMirror from 'react-codemirror';

import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript.js';

let beautify = require('js-beautify').js;

const value = 'describe("addUser","a","bunch","of","useless","parameters", () => { it("should return an object", () => {console.log("Type your test cases here")}) }); function() { console.log("arrow syntax?")}; describe("addUser", () => { it("should return an object") }); function() { console.log("arrow syntax?")};describe("addUser", () => { it("should return an object") }); function() { console.log("arrow syntax?")};describe("addUser", () => { it("should return an object") }); function() { console.log("arrow syntax?")};describe("addUser", () => { it("should return an object") }); function() { console.log("arrow syntax?")};describe("addUser","a","bunch","of","useless","parameters", () => { it("should return an object", () => {console.log("Type your test cases here")}) });'

const mirror = (props) => {
  const [js, setJs] = useState('');
  // let date = new Date();

  useEffect(() => {
    let formattedJs = beautify(value, {indent_size: 2});
    setJs(formattedJs);
    // console.log('useEffect', Date.now());
    console.log('printing out formatted js\n', js);
    console.log(typeof js);
  },[])

  return (
    <div className='code'>
      <CodeMirror
        options={{
          value: js,
          mode: 'javascript',
          theme: 'dracula',
          lineNumbers: true,
          readOnly: true,
          tabsize: 2,
          lineWrapping: true
        }}
      />
      <div className = 'code'>
        <div className = 'code-bottom'>
          <button id = 'generate-btn'>Generate Jest Tests</button>
        </div>
      </div>
    </div>
  )
}

export default mirror;
