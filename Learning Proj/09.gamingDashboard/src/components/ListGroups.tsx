// import { MouseEvent } from "react";
interface Props{
    items:String[];
    heading: String;
}

import { useState } from "react";
function ListGroups({items,heading}:Props) {

    

    // const handleClick=(event:MouseEvent)=>console.log(event);

    const[selectedIdx, setSelectedIdx]=useState(-1);
    
  return (
    <>
      <h2> {heading}: </h2>

      {items.length===0 && <p> No items Found</p>}
      <ul className="list-group">
        {items.map((item,index)=>(
            <li className={
                selectedIdx===index? "list-group-item active": "list-group-item"
            } 
            key={index}
            onClick={()=>{setSelectedIdx(index)}}
            >{item}</li>
        ))}
        
      </ul>
    </>
  );
}

export default ListGroups;
