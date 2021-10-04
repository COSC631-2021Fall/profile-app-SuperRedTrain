import './App.css';
import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Education from './components/education';
import { Address } from './components/contact';
import Contact from './components/contact';
import Interests from './components/interests';
import Navbar from './components/navbar';
import {useState, useEffect} from 'react';


function App() {
  const themes = ['powderblue', 'white', 'lightgreen'];
  const [themeId, setThemeId] = useState(0);

  const switchTheme = () => {
    setThemeId((id) => (id+1)%3)
  }

  const handleKeydown = (Event) => {
    switch (Event.key) {
      case "0":
      case "1":
      case "2":
        setThemeId(parseInt(Event.key, 10));
        break;
      default:
        break;
    }
  }

  useEffect(
    () => {
      window.addEventListener("keydown", handleKeydown);
    }
  );

  return (
    <div style={{backgroundColor: themes[themeId]}}>
      <header>
        <Navbar />
        <div><button onClick = {switchTheme}>Switch Theme</button></div>
      </header>
      <main>
        <h1>Ke Shao</h1>

        <BrowserRouter>
          <Switch>
            <Route path={["/education"]}>
              <Education />
            </Route> 
            <Route path={["/interests"]}>
              <Interests />
            </Route> 
          </Switch>
        </BrowserRouter>

        <BrowserRouter> 
            <Route path={["/contact", "/contact/:id", "/"]}>
              <Contact />
            </Route>
            <Route path={["/address", "/"]}>
              <Address />
            </Route> 
        </BrowserRouter>

       

      </main>



    </div>
  );
}

export default App;
