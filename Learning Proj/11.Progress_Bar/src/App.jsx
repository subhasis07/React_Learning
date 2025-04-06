import { useEffect, useState } from "react"

const ProgressBar=({progress})=>{
  const[animatedProgress, setAnimatedProgress]=useState(0);

  useEffect(()=>{
    setTimeout(()=>setAnimatedProgress(progress),100)
  },[progress])
  
  return(
    <div className="outer">
      <div 
        className="inner" 
        style={{
          // width:`${progress}%`
          transform:`translateX(${animatedProgress-100}%)`
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0"  
      >
        {progress}%
      </div>
    </div>
  )
}
function App() {

  const bar=[5,10,20,40,80]
  return(
    <div className="app">
      <h1>Progress Bar</h1>
      {bar.map((val)=>(
        <ProgressBar key={val} progress={val}/>
      ))}
        
    </div>
    
  )
}

export default App
