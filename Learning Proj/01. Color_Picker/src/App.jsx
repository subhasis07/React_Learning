import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")
  const colors=["red", "green", "blue", "yellow", "orange"]
  return (
    <div className='h-screen w-full '
    style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-10 px-2 inset-x-0'>
          <div className='flex flex-wrap justify-center gap-4 bg-white p-3 rounded-xl'>
            {colors.map((clr) => (
              <button
                key={clr}
                onClick={() => setColor(clr)}
                className='outline-none px-3 py-1 rounded-2xl text-black shadow-md'
                style={{ backgroundColor: clr }}
                aria-label={`Set background color to ${clr}`}
              >
                {/* capitalize 1st word & then as it is */}
                {clr.charAt(0).toUpperCase() + clr.slice(1)} 
              </button>
            ))}
          </div>
        </div>
    </div>
  )
}

export default App