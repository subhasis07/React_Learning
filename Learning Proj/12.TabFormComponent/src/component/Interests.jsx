import React from 'react'

const Interests = ({data, setData}) => {

    const {interest}= data;

    const handleChangeInterest=(e)=>{
        setData((prevState)=>(
            {
                ...prevState,
                interest: e.target.checked ? 
                [...prevState.interest, e.target.value]:
                prevState.interest.filter((i)=>i!==e.target.value)
            }
        ))

    }
  return (
    <div>
        <div>
            <label>
                <input
                    type='checkbox'
                    name='interest'
                    value='coding'
                    checked={interest.includes('coding')}
                    onChange={handleChangeInterest}
                />
                Coding
            </label>
        </div>
        <div>
            <label>
                <input
                    type='checkbox'
                    name='interest'
                    value='sports'
                    checked={interest.includes('sports')}
                    onChange={handleChangeInterest}
                />
                Sports
            </label>
        </div>
        <div>
            <label>
                <input
                    type='checkbox'
                    name='interest'
                    value='music'
                    checked={interest.includes('music')}
                    onChange={handleChangeInterest}
                />
                Music
            </label>
        </div>
    </div>
  )
}

export default Interests