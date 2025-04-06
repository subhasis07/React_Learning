import { useState } from "react"
import Interests from "./Interests"
import Profile from "./Profile"
import Settings from "./Settings"


const TabForm=()=>{

    const[data,setData]=useState(
        {
            name:"",
            age:"",
            email:"",
            interest:["sports","coding"],
            theme:"dark",
        }
    )

    const[activeTab, setActiveTab]=useState(0);

    const Tabs=[
        {
            name:"Profile",
            component: Profile
        },
        {
            name:"Settings",
            component: Settings
        },
        {
            name:"Interests",
            component: Interests
        }
    ]

    const ActiveTabComp=Tabs[activeTab].component;


    const handleNext=()=>{
        setActiveTab((prev)=>prev+1)
    }
    const handlePrev=()=>{
        setActiveTab((prev)=>prev-1)
    }
    const handleSubmit=()=>{
        console.log(data)
    }
    return(
        <div>
            <div className="TabComp">
                {Tabs.map((tab,index)=>(
                    <div 
                        className="heading"
                        key={index}
                        onClick={()=>setActiveTab(index)}
                    >
                        {tab.name}
                    </div>
                ))}

            </div>

            <div className="DetailsComp">
                <ActiveTabComp data={data} setData={setData}/>
            </div>

            <div>
                {activeTab>0 && <button onClick={handlePrev}>Prev</button>}
                {activeTab<Tabs.length-1 && <button onClick={handleNext}>Next</button>}
                {activeTab==Tabs.length-1 && <button onClick={handleSubmit}>Submit</button>}
         
            </div>
            
        </div>
    )
}

export default TabForm