import React from 'react'

const Settings = ({data,setData}) => {

    const{theme}=data;

    const handleChangeTheme=(e)=>{
        setData((prevState)=>(
            {
                ...prevState,
                theme:e.target.value
            }
        ))
    }


  return (
    <div>
        <div>
            <label>
                <input
                    type='radio'
                    name='theme'
                    value='dark'
                    checked={theme==='dark'}
                    onChange={handleChangeTheme}
                />
                Dark
            </label>
        </div>
        <div>
            <label>
                <input
                    type='radio'
                    name='theme'
                    value='light'
                    checked={theme==='light'}
                    onChange={handleChangeTheme}
                />
                Light
            </label>
        </div>
    </div>
  )
}

export default Settings