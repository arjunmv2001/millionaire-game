
import React, { useRef } from 'react'
import logo from '../assets/icon.jpg'

function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
    const enteredName = inputRef.current.value;
    if (enteredName) {
      setUsername(enteredName.toUpperCase());
    }
  
  };
  return (
<>
    
<div className="image1">
<img className='img' src={logo} alt="" />
  </div>    
    <div className="start">
    <input
      className="startInput"
      placeholder="Enter your name"
      ref={inputRef}
    />
    <button className="startButton bg-warning " onClick={handleClick}>
    Start Game &nbsp;<i className='fa-solid fa-arrow-right'></i>
    </button>
  </div>
  </>
  )
}

export default Start