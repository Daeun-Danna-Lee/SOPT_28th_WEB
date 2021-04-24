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

    const imgURL = "cat.png";

    return (
        <>
            <h1 style={style}>Hello, {name.first}</h1>
            <img src={imgURL} alt="" />
        </>
    )
}

export default Hello;