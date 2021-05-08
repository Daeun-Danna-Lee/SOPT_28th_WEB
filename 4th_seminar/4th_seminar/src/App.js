import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainHeader from "./components/common/MainHeader";
import Calendar from "./components/common/Calendar";
import Title from "./components/common/Title";
import Footer from "./components/common/Footer";
import Main from "./pages/Main";
import Diary from "./pages/Diary";

function App() {
  return (<>
    <MainHeader />
    <Calendar />
    <Title />
    <BrowserRouter>
      <switch>
        <Route exact path="/" component={Main} />
        <Route path="/diary/:id" component={Diary} />
        <Route component={() => <div>404</div>} />
      </switch>
    </BrowserRouter>
  </>
  );
}

export default App;
