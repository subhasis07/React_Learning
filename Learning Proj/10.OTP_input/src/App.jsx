import { useEffect, useRef, useState } from "react";

function App() {
  const OTP_INPUTBOX=5;

  // State to store the OTP digits as an array
  const[inputArr, setIinputArr]= useState(
    new Array(OTP_INPUTBOX).fill("")
  )

  // Refs to access input elements directly for focus control
  const refArr=useRef([]);

  // Automatically focus the first input on mount
  useEffect(()=>{
    refArr.current[0]?.focus();
  },[])

  // Handle input change
  const handleOnChange= (value,index)=>{
    if(isNaN(value) || value === " ") return; // Allow only digits (strip out anything that's not a number)
    
    const newVal=value.trim();
    const newArr=[...inputArr];
    newArr[index]=newVal.slice(-1); // Only allow 1 digit
    setIinputArr(newArr);
    refArr.current[index+1]?.focus(); // Move focus to the next input field
  }

  // Handle backspace key behavior
  const handleOnKeyChange = (e,index)=>{
    if (e.key === 'Backspace') {
      const newArr = [...inputArr];
  
      if (inputArr[index]) {
        newArr[index] = ""; // If current box is not empty, clear it
        setIinputArr(newArr);
      } else {
        if (index > 0) {
          // If current is already empty, move focus back and clear previous
          newArr[index - 1] = ""; 
          setIinputArr(newArr);
          refArr.current[index - 1]?.focus();
        }
      }
    }
  }

  return(
    <div className="App">
      <h1>OTP INPUT</h1>
      {inputArr.map((input, idx)=>{
        return (
          <input 
            className="OTP_IP" 
            key={idx} 
            type="text"
            maxLength={1} // Restrict input to 1 character
            value={inputArr[idx]}
            ref={(input)=>(refArr.current[idx]=input)}  // Assign ref for each input
            onChange={(e)=>handleOnChange(e.target.value,idx)}
            onKeyDown={(e)=>handleOnKeyChange(e,idx)}
          />)

      })}
    </div>
  )
}

export default App
