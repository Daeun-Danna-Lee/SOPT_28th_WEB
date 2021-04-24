import React, { useImperativeHandle } from 'react';
import { getUserData } from '../lib/api';

const SearchBar = () => {

    const [userName, setUserName] = React.useState(null);

    const changeHandeler = event => {
        // 디폴트 동작을 멈주게 하고
        event.preventDefault();
        // 아래 리턴의 바뀐 밸류를 넣어줌
        setUserName(event.target.value);
    };

    const submitHandler = (event) => {
        
    }

    return (
        <form onSubmit={submitHandler}>
            <input 
            type="text" 
            value={userName} 
            onChange={changeHandeler} 
            placeholder="Github ID를 입력해주세요"
            ></input>
        </form>
    );
};

export default SearchBar;