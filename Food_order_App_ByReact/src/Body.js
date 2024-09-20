import { useEffect, useState } from "react";
import resList from "../utils/mockdata";
import Resturants, {resturantWithPromoted} from "./Resturants";
import Shimmer from "./Shimmer";

// import {useParams} from 'react-router-dom';
// import useResMenu from "../utils/useResMenu";

// import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {
    const[listOfRes, setListOfRes] = useState(resList);
    const[filteredRes,setFilteredRes]=useState(resList);
    [searchText, setSearchText]= useState("");

    const PromotedRestaurant= resturantWithPromoted(Resturants);

    // console.log(resList);

    // setFilteredRes(resList);
    
    // const resID= useParams();
    // const resInfo= useResMenu(resID);

    // useEffect(()=>{
    //     fetchData();
    // }, [])

    // const fetchData = async() =>{
    //     const data= await fetch();
    //     const json= await data.json();

    //     // console.log(json);


    //     setListOfRes(json. . . )
    //     setFilteredRes(json...)  
    // }

    // const status= useOnlineStatus();
    // if(status===false){
    //     return(
    //         <>
    //             <h1>Please check your internet connection</h1>
    //             console.log("Offline");
    //         </>
            
    //     )
        
    // }
    if(listOfRes.length===0){
        return <Shimmer/>
    }
    return(
        <div className='body'>
            <div className='flex m-3 gap-3'>
                <div>
                    <input
                        type="text"
                        className="border rounded-lg border-b-slate-700"
                        value={searchText}
                        onChange={(e)=>{
                            setSearchText(e.target.value);
                        }}
                    />
                </div>

                <button 
                className="border-indigo-500"
                onClick={()=>{
                    const filteredList= listOfRes.filter(
                        (res) => res.info.avgRating>4
                    )
                    setFilteredRes(filteredList);
                }}> 
                Top Rates Resturants
                </button>

                <button className=""
                    onClick={()=>{
                        console.log(searchText);
                        const filteredRes=listOfRes.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        console.log(filteredRes);
                        setFilteredRes(filteredRes);
                    }}
                
                >
                    Search
                </button>
            </div>
            
            <div className="flex flex-wrap">
                
                {filteredRes.map((resturant)=>(
                    resturant.info.promoted==true ? (
                        <PromotedRestaurant  resData={resturant} key={resturant.info.id}/>
                    ): (
                        <Resturants  resData={resturant} key={resturant.info.id}/>
                    )
                    
                ))}
            </div>
            
        </div>
        
    )
}


export default Body;