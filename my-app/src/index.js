import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Geting} from "./axious";
import {Navbar} from "./Navbar";
import Footer from "./Footer";
import {Singal} from "./Singal";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Card2} from "./card2";
import {Card} from "./card";
import {Categories} from "./categories";
import {GetByCat} from "./getallcat";

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
    },{
    path:'/categories' ,
        element:<Categories/>
    },
    {
        path:'/all-categories' ,
        element:<GetByCat/>
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