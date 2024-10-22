import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Footer = () => {

  const data=useContext(DataContext)
  return (
    <div>Footer {data.age}</div>
  )
}

export default Footer