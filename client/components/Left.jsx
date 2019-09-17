import React, {useState} from 'react';
const handleSubmit = ()=>{
    
}
const handleChange = (e)=>{
    console.log('event: ', e.target.value);

}
function Left() {
  return(
    <div className ='Left dib br3 pa3 '>
      <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" 
      type="text" aria-describedby="name-desc" onChange={handleChange}>


      </input>
      <button className='butt bg-light-green ma2 grow bw2 shadow-5' onClick={handleSubmit}>
          add Code
      </button>
    </div>
  )
}

export default Left