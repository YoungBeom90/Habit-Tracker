import React, {useEffect, useRef, useState} from 'react';

const Simplehabit = () => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  useEffect(() => {
    console.log(`mounted & updated! : ${count}`)
  }, [count])

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={()=>setCount(count + 1)}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
}

export default Simplehabit;
