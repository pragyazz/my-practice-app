import React from 'react';
import ReactDOM from 'react-dom';

export default function StateComponent() {

    var userName = "a";
    var userAge= 10;

    return (
        <>
            <h1>Hello {returnName()}...</h1>
            <h2>User Name is: {userName}</h2>
            <h3>User Age is: {userAge}</h3>
        </>
    )
}

function returnName() {
    return "TechnoFunnel"
}
