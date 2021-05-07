import React, { useEffect, useState } from "react";
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import Result from './components/Result';
import { getUserData } from './lib/api';
import Styled from "styled-components";

const MainWrap = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function App() {

  const [userData, setUserData] = useState("");

  // const getData = async (name) => {
  //   try {
  //     const data = await getUserData(name);
  //     setUserData(data);
  //   } catch (e) {
  //     console.log(e);
  //   };
  // };

  const getData = async (name) => {
    setUserData({ ...userData, status: "pending" });
    try {
      const data = await getUserData(name);
      if (data === null) throw Error;
      setUserData({ status: "resolved", data: data });
    } catch (e) {
      setUserData({ status: "rejected", data: null });
      console.log(e);
    }
  };

  useEffect(() => {
    getData("Daeun Lee");
  },[]);

  return (
    <MainWrap>
      <SearchBar getData={getData}/>
      <Result userState={userData}/>
    </MainWrap>
  )
}

export default App;