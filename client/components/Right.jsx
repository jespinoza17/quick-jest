import React, {useState} from 'react';

const handleSubmit = ()=>{
  alert("hi")
}
function Right() {
  return(
    <div className ='Right dib br3 pa3 ma2 grow bw2 shadow-5'>
      <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc"></input>
      <button className='butt bg-light-green' onClick={handleSubmit}>
          add
      </button>
    </div>
  )
}

export default Right