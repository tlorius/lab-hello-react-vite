// import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import declarativeLogo from "./assets/icon1.png";
import componentsLogo from "./assets/icon2.png";
import singleWayLogo from "./assets/icon3.png";
import jsxLogo from "./assets/icon4.png";
import ironHackLogo from "./assets/ironhack-logo-xs.png";
import menuLogo from "./assets/menu-top-xs.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="nav-bar">
          <img src={ironHackLogo} alt="Ironhack Logo" />
          <img className="menu-logo" src={menuLogo} alt="Menu Logo" />
        </nav>
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </header>
      <body>
        <div className="image-bar">
          <div className="">
            <img src={declarativeLogo} alt="Declarative Logo" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="">
            <img src={componentsLogo} alt="Components Logo" />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="">
            <img src={singleWayLogo} alt="Single-Way Logo" />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div className="">
            <img src={jsxLogo} alt="JSX Logo" />
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
