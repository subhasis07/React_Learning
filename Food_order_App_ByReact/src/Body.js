import { useState } from "react";
import resList from "../utils/mockdata";
import Resturants from "./Resturants";

const Body = () => {
    const[listOfRes, setListOfRes] = useState(resList);
    return(
        <div className='body'>
            <div className='search_Filter'>
                <div className="searchBox">
                    Search
                </div>
                <button 
                className="TopResBtn"
                onClick={()=>{
                    const filteredList= listOfRes.filter(
                        (res) => res.info.avgRating>4
                    )
                    setListOfRes(filteredList);
                }}> 
                Top Rates Resturants
                </button>
            </div>
            
            <div className='AllResCards'>
                {listOfRes.map((resturant)=>(
                    <Resturants  resData={resturant}/>
                ))}
            </div>
            
        </div>
        
    )
}


export default Body;