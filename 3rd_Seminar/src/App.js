import React, { useEffect, useState } from "react";
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { getUserData } from './lib/api';

function App() {

  const [userData, setUserData] = useState(null);

  // const getData = async (name) => {
  //   try {
  //     const data = await getUserData(name);
  //     setUserData(data);
  //   } catch (e) {
  //     console.log(e);
  //   };
  // };

  const getData = async () => {
    const data = await getUserData("Daeun-Danna-Lee");
    setUserData(data);
  };

  useEffect(() => {
    getData("Daeun Lee");
  },[]);

  return (
    <>
      <SearchBar />
      <UserCard userData={userData}/>
    </>
  )
}

export default App;