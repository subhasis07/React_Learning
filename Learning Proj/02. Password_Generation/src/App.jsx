import { useCallback, useEffect, useState } from 'react'


function App() {

  const [length, setLength] = useState(7);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [characterAllowed, setCharacterAllowed]=useState(false);
  const [password,setPassword]= useState();

  const passwordGeneration=useCallback(()=>{
    let pass="";
    let allowedString="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      allowedString+="0123456789";
    }
    if(characterAllowed){
      allowedString+="~!@#$%^&*()_+{}[]|<>?/*-;";
    }

    for (let i = 1; i <= length; i++) {
      // let char=Math.floor(Math.random()*allowedString.length+1);
      let char = Math.floor(Math.random() * allowedString.length +1);
      pass+=allowedString.charAt(char);

    }

    setPassword(pass);

  },[length, numberAllowed, characterAllowed,setPassword])

    useEffect(()=>{
        passwordGeneration();
    },[length,numberAllowed,characterAllowed,passwordGeneration])
  return (
    <div className='h-screen w-full bg-zinc-800 text-black'>
        <div className='w-auto mx-48 rounded-lg bg-zinc-500 text-3xl p-5'>
          <h1 className='text-center my-3'>Password Generator</h1>
          <div className='flex gap-2'>
          <input 
            type='text'
            value={password}
            className='rounded-md outline-none w-full p-2 text-black'
            placeholder='password'
            readOnly
          >
          </input>
          <button className='outline-none bg-blue-600 shrink-0 p-2 rounded-md'>
            Copy
          </button>
          </div>
          
          <div className='flex justify-evenly mt-5'>
            <div className='flex items-center gap-x-2'>
                <input
                  type='range'
                  min={5}
                  max={50}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e)=>setLength(e.target.value)}
                  >
                </input>
                <label className="text-xl">Length: {length}</label>
            </div>

            <div className='flex items-center gap-x-2'>
              <input 
                type="checkbox" 
                defaultChecked={numberAllowed}
                id="numberInput"
                className='cursor-pointer'
                onChange={()=>{
                  setNumberAllowed((prev)=>!(prev))
                }}  
              />
              <label className="text-xl">Number</label>

            </div>
            <div className='flex items-center gap-x-2'>
              <input 
                type="checkbox"
                className='cursor-pointer'  
                defaultChecked={characterAllowed}
                id="characterInput"
                onChange={()=>{
                  setCharacterAllowed((prev)=>!(prev))
                }}  
              />
              <label htmlFor='numberInput' className="text-xl">Character</label>

            </div>
            
          </div>

        </div>
    </div>
  )
}

export default App