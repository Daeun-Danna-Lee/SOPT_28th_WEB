import React from "react";

function Hello({props}) {

    const name = {
        first: "Daeun",
        last: "Lee",
    };

    const style = {
        color: "yellow",
        backgroundColor: "skyblue",
    };

    // const soptPart = "";

    const imgURL = "cat.png";

    return (
        <>
            <h1 style={style}>Hello, {props.soptPart} {name.first}</h1>
            <img src={imgURL} alt="" />
        </>
    )
}

export default Hello;