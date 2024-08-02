import React from 'react';
import ReactDOM from 'react-dom/client';

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
const rootBox= ReactDOM.createRoot(document.getElementById("root"));

rootBox.render(box)