import React, {useState} from "react";

function Hello({props}) {

    const [count, setCount] = useState(0);
    // 혹은 useState를 import 해오지 않고 React.useState(0) 이라고 써도 됨

    function useState(initalValue) {
        let count = initalValue;
        function getCount() {
            return _count;
        }
        function setCount(newValue) {
            _count = newValue;
        }
    }

    return (
        <>
            <h1>Hello</h1>
        </>
    )
}

export default Hello;