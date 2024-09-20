import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header';
import Body from './Body';

import {createBrowserRouter , RouterProvider, Outlet } from 'react-router-dom';
import About from './About';
import Error from './Error';
import Contact from './Contact';

const FoodApp= () =>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        
    )
}

const appRouter= createBrowserRouter ([
    {
        path:"/",
        element:<FoodApp/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
        ],
        errorElement:<Error/>,
    }
    
])

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);