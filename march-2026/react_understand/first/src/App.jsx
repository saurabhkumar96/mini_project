import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [arr, setArr] = useState([])
  
  // const inter = useRef(null)
  // useEffect(()=>{
  //   inter.current = setInterval(() => {
  //     setCount(prev => prev + 1);
  //   }, 1000);
  // },[])

  const handleClick = () => {
    setCount(prev => prev + 1);
    if(arr.length<10){
      setArr(prev => [...prev, prev.length + 1]);
    }
      
  }
  return (
    <>
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click</button>
      {arr.map((data, index, arra) => {
      if (arra.length < 10) {
        return <div key={index}>{data}</div>;
      } else if (arra.length>10 && arra.length < 20) {
        return <div key={index}>{data}</div>;
      } 
      
    })}
    </div>
    </>
  )
}

export default App