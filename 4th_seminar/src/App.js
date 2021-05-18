import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainHeader from "./components/common/MainHeader";
import Calendar from "./components/common/Calendar";
import Title from "./components/common/Title";
import Footer from "./components/common/Footer";
import Main from "./pages/Main";
import Diary from "./pages/Diary";
import { useState, useEffect } from 'react';
import { getUserData } from './lib/api';

const getCurrDate = () => {
  const now = new Date();
  const currYear = now.getFullYear();
  const currMonth = now.getMonth();
  
  return {year: currYear, month: currMonth};
}

function App() {
  const [year, setYear] = useState(getCurrDate().year);
  const [month, setMonth] = useState(getCurrDate().month);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    (async() => {
      const data = getUserData();
      data[year] && setUserData(data[year][month]);
      console.log(data);
    })();
  }, [year, month]);

  return (
    <>
      <BrowserRouter>
        <MainHeader />
        <Calendar 
          currYear={year} 
          setCurrYear={setYear} 
          currMonth={month} 
          setCurrMonth={setMonth}
        />
        <Title />
        <Switch>
          <Route exact path="/" component={() => {return <Main props={userData} />}} />
          <Route path="/diary/:id" component={Diary} />
          <Route component={() => <div>404 Page Not Found</div>} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
