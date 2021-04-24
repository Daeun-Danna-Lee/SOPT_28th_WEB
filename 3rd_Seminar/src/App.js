import React from "react";
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import GetUserData, { getUserData } from './lib/api';

function App() {

  const data = getUserData("Daeun-Danna-Lee");

  return (
    <>
      <SearchBar />
      <UserCard />
    </>
  )
}

export default App;