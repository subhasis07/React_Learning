import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header = () => {

  const data= useContext(DataContext)
  return (
    <div>Header {data.loc}</div>
  )
}

export default Header