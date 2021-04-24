import React, {useEffect} from "react";
import reactDom from "react-dom";

function Hello() {

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);
    // count 값이 변경될 때마다 새로 불러오게 됨

    return (
        <>
            <p>You clicked {count} times</p>
            <button onClick={() => {setCount(count + 1)}}>Click</button>
        </>
    )
}

export default Hello;