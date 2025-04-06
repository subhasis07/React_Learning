import React from 'react'

const Profile = ({data,setData}) => {

    const{name, age, email}=data;

    const handleOnChange=(e,item)=>{
        setData(prevState=>({
            ...prevState,
            [item]:e.target.value
        }))
    }
  return (
    <div>
        <div>
            <label>Name : </label>
            <input type="text" value={name} onChange={(e)=>handleOnChange(e,"name")}/>
        </div>
        <div>
            <label>Age : </label>
            <input type="number" value={age} onChange={(e)=>handleOnChange(e,"age")}/>
        </div>
        <div>
            <label>Email : </label>
            <input type="email" value={email} onChange={(e)=>handleOnChange(e,"email")}/>
        </div>
    </div>
  )
}

export default Profile