import React, { useImperativeHandle } from 'react';
import { getUserData } from '../lib/api';
import Styled from "styled-components";

const SearchBarWrap = Styled.div`
  input {
    width: 300px;
    background-color:#28223f;
    border: 2px solid skyblue;
    color: white;
    padding: 5px;
    font-size: 15px;
    margin-bottom: 30px;
  }
  input::placeholder {
    color: white;
  }
  input:focus {
    outline: none;
  }
  form {
    display: flex;
    justify-content: center;
  }
  h2 {
    color: white;
    text-align: center;
    font-size: 32px;
    margin-bottom: 10px;
  }
`;

const SearchBar = ({ getData }) => {

    const [userName, setUserName] = React.useState("");

    const changeHandeler = event => {
        // 디폴트 동작을 멈주게 하고
        event.preventDefault();
        // 아래 리턴의 바뀐 밸류를 넣어줌
        setUserName(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        getData(userName);
        setUserName("");
    }

    return (
        <SearchBarWrap>
            <h2>Github Profile Finder</h2>
            <form onSubmit={submitHandler}>
            <input 
            type="text" 
            value={userName} 
            onChange={changeHandeler} 
            placeholder="Github ID를 입력해주세요"
            ></input>
        </form>
        </SearchBarWrap>
    );
};

export default SearchBar;