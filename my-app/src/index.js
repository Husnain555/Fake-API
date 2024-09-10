import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Geting} from "./axious";
import {Navbar} from "./Navbar";
import Footer from "./Footer";
import {Singal} from "./Singal";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Card2} from "./Photos/card2";
import {Card} from "./card";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Geting/>
    },
    {
        path: "/products",
        element: <Singal/>
    },
    {
        path: '/product/:id',
        element: <Singal/>
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Navbar/>
      <RouterProvider router={router}/>
      <Footer/>

  </React.StrictMode>
);