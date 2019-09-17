import React from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2'
// import 'codemirror/mode/javscript/javscript';
function mirror() {

  return (
    <div id='mirror'>
      <CodeMirror
        value='(arg) => {console.log(arg)};'
        options={{
          mode: {name:'javascript'},
          theme: 'ambiance',
          lint: true,
          line: true,
          eletricChars: true
        }}
        onChange={(editor, data, value) => {
        }}
      />
    </div>
  )
}

export default mirror;
