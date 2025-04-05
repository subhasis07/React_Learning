import React from 'react'

interface Props{
    Children: String;
    onClick:()=>void;
}

const Button = ({Children, onClick }: Props) => {
  return (
    <div className='btn btn-primary' onClick={onClick}>{Children}</div>
  )
}

export default Button