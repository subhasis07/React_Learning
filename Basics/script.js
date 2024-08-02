//to create prod ready app, we need to change the codebase

const heading= React.createElement(
    "h1", {id:"attributes"}, "Hello World from React (CDN link)"); //tag , attributes , childs --> this return an Obj

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(heading) //render help to convert the obj & then put it in html

/*
<div>
    <h1>
        <h2> inside parent div </h2>
    </h1>

</div>
*/
const box= React.createElement(
    "h1", {id:"attributes"},
    [React.createElement("h2",{},"Inside Parent Div"),
    React.createElement("h2",{},
        React.createElement(
            "h3",
            {},
            "Inside of sub h2"
        )
    )
    ]
);
const rootBox= ReactDOM.createRoot(document.getElementById("box-2"));

rootBox.render(box)

