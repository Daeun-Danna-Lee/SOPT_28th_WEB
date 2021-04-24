import React from "react";

function Hello() {

    const name = {
        first: "Daeun",
        last: "Lee",
    };

    const style = {
        color: "red",
        backgroundColor: "skyblue",
    };

    return (
        <>
            <h1 style={style}>Hello, {name.first}</h1>
        </>
    )
}

export default Hello;