import React, { useState } from 'react'

export default function Advice_App() {
    const [advice,setAdvice]=useState("Please click");
    const [count,setCount]=useState(0);
    async function getAdvice()
    {
        const res=await fetch("https://api.adviceslip.com/advice");
        const data=await res.json();
        setAdvice(data.slip.advice);
        setCount((c)=>c+1);
    }
  return (
    <div>
    <h3>{advice}</h3>
    <button onClick={getAdvice}>Get Advice</button>
    <p>You have read <b>{count}</b> pieces of advice</p>
    </div>
  )
}
