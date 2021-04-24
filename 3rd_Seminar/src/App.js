import React, { useEffect, useState } from "react";
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { getUserData } from './lib/api';

function App() {

  const [userData, setUserData] = useState(null);

  const getData = async () => {
    const data = await getUserData("Daeun-Danna-Lee");
    setUserData(data);
  };

  useEffect(() => {
    getData();
    console.log(userData);
  },[]);

  return (
    <>
      <SearchBar />
      <UserCard />
    </>
  )
}

export default App;