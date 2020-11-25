import React, { useCallback, useRef, useState } from 'react';

const SimpleHabit = (props) => {

  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() =>{
    setCount(count + 1)
  }); // props 전달하면 업데이트 되기때문에 useCallback

  // useEffect(()=>{
  // }) // 마운트 , 업데이트 될때  props , state 변경 될 때 

  // useEffect(()=>{
  // },[count]) 업데이트 될때마다 


  // useEffect(()=>{
  // },[]) //배열에 값이 없으면 처음에만 
  
  return (
    <li className="habit">
    {/* <span className="habit-name">{name}</span> */}
    <span ref={spanRef} className="habit-count">{count}</span>
    <button className="habit-button habit-increase" onClick={handleIncrement}>
      <i className="fas fa-plus-square"></i>
    </button>
    {/* <button className="habit-button habit-decrease" onClick={handleDecrement}>
      <i className="fas fa-minus-square"></i>
    </button>
    <button className="habit-button habit-delete" onClick={handleDelete}>
      <i className="fas fa-trash"></i>
    </button> */}
  </li>
  );
}

export default SimpleHabit;