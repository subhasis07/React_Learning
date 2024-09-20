import { useEffect, useState } from "react"

const useResMenu=(resID)=>{ 

    const[resInfo, setResInfo]= useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async()=>{
        const data= await fetch("<API>"+resID);
        const json= await data.json();

        setResInfo(json);
    }

    return resInfo;
}

export default useResMenu;