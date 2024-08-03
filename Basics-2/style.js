import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement("h1", {id:"attribute"}, "Hello from React");

// const jsxHeading= <h1 id="attri" className='bute'>Hello from JSX</h1>

const Title = () =>{
    return  <h1>Hey React Devs</h1>
}

let val= 50;
const FuncComponent = () =>(
    <div>
        {Title()}
        {val};
        <Title></Title>
        <Title/>
        <h1>Hello from Body FuncComp</h1>
    </div>

    //wrap the elements with a React Fragment (<>...</>), which is a common practice to group multiple elements without adding extra nodes to the DOM.
    // <>
    //     <Title/>
    //     <div>
            
    //         <h1>Hello from Body FuncComp</h1>
    //     </div>
    // </>
    
)

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<FuncComponent/>);