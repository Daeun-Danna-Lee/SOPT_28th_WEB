import React from "react";

function Hello({soptPart}) {

    const name = {
        first: "Daeun",
        last: "Lee",
    };

    const style = {
        color: "red",
        backgroundColor: "skyblue",
    };

    // const soptPart = "";

    const imgURL = "cat.png";

    return (
        <>
            <h1 style={style}>Hello, {soptPart} {name.first}</h1>
            <img src={imgURL} alt="" />
        </>
    )
}

export default Hello;