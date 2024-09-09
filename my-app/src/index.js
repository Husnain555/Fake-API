import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {NavBar} from "./Nav-bar/Nav-Bar";
import {NavBar2} from "./Nav-bar/nav-bar2";
import {Card} from "./Card/card";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<NavBar/>
    <NavBar2/>
      <Card/>
  </React.StrictMode>
);