import React, { useEffect, useState } from "react";
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data, setData] =useState([]);

    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/subhasis07`)
    //     .then(res=>res.json())
    //     .then(gitData=>{
    //         console.log(gitData);
    //         setData(gitData);
    //     })
    // },[])
    return(
        <div className="text-2xl text-center text-white p-3 bg-zinc-600 ">
            Github repo: {data.public_repos}
        
            <img src={data.avatar_url} alt="Git Profile Pic" className="w-52 mx-auto flex justify-center items-center" />    
        </div>
    )
}

export default Github;


export const gitHubInfoLoader = async () =>{
    const response = await fetch(`https://api.github.com/users/subhasis07`)
    return response.json();
} 