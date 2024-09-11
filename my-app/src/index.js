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
import {SubmitData} from "./Submit Data";
import {Cart} from "./cart-item";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Geting/>
    },
    {
        path: "/404",
        element: <div>Item Not Found 404 <a href="/">Go to Home</a></div>
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
    },
    {
        path:'/all-categories/:id',
        element:<GetByCat/>
    },
    {
        path:'/add-product',
        element:<SubmitData/>
    },
    {
        path:'/cart',
        element:<Cart/>
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