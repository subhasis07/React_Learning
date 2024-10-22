import React from 'react'
import { Link } from 'react-router-dom'

const Top = () => {
  return (
    <div className='flex justify-evenly text-xl border border-blue-700 '>
        <Link to="/about-us"> AboutUs</Link>
        <Link to="/contact-us">ContactUs</Link>
        <Link to="/">Home</Link>
        
    </div>
  )
}

export default Top