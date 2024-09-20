
import React from "react";
class User extends React.Component{

    constructor(props){
        super(props);
        console.log(props);

        this.state={
            count1:0,
            count2:2,
            // userInfo:{
            //     name: "dummy",
            //     location: "dummy"
            // }
        };
    }
    
     componentDidMount(){
        console.log("Called after render phase completes");

        // try {
        //     const data= await fetch("https://api.github.com/users/subhasis07");
        //     const json= await data.json();

        //     console.log(json);

        //     this.setState({
        //         userInfo:json,
        //     })
        // } catch (error) {
        //     console.log(error);
        //     // try to show user about the error -- need to check later
        // }
        
    }
    render(){

        const{count1,count2}=this.state;
        const{lectureNo,source}=this.props;
        // const{name,location}=this.state.userInfo;

        return(
            <div>
                <h1>Name: Class Based Component</h1>
                <h1>Count1: {count1}</h1>
                <button onClick={()=>{
                    this.setState({
                        count1:this.state.count1+1,
                    });
                }}
                >Count1 Increament
                </button>

                <h1>Count2: {count2}</h1>
                <h2>Lec No: {lectureNo}</h2>
                <h3>Video Source:"Namaste React" {source}</h3>
                <h3> By Akshay Saini</h3>
                {/* <hr></hr>
                <h2>{name}</h2>
                <h2>{location}</h2> */}
            </div>
        )
    }
    componentDidUpdate(){
        console.log("Called after componentDidMount Called");
    }  // check why this is not called

    componentWillUnmount(){
        console.log("Calls after the component got disappeared from UI; e.g; changing the page");
    }
}

export default User;