import { createBrowserRouter } from 'react-router-dom';
import RequiredAuth from '../contexts/RequiredAuth';
import MainLayout from '../layout/MainLayout';
import WhatWeDo from '../LinkSections/WhatWeDo';
import Blog from '../Pages/Blog/Blog';
import BlogDetail from '../Pages/Blog/BlogDetail';
import Development from '../Pages/Development/Development';
import DevelopmentBlog from '../Pages/Development/DevelopmentBlog';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import NotFound from '../Pages/NotFound/NotFound';
import PostBlog from '../Pages/PostBlog/PostBlog';
import SignUp from '../Pages/SignUp/SignUp';


export const router = createBrowserRouter([

    {
    path: "/",element: <MainLayout/>, 
    children:[
      {path: "/", element: <Home />},
      {path: "/home", element: <Home />},
      {path: "postBlog",element: <RequiredAuth><PostBlog /></RequiredAuth>},
      {path: "development",element: <RequiredAuth><Development /></RequiredAuth>},
      {path: "login",element: <Login />},
      {path: "signup",element: <SignUp />},
      {path: "whatWeDo",element: <WhatWeDo />},
      {path: "*",element: <NotFound />},

  
      
    ]},
    {
      path: "blogs",
      loader: async () => { 
        return fetch('https://empower-server-production.up.railway.app/blogs');
      },
      element: <RequiredAuth><Blog /></RequiredAuth>},

      {
        path: "singleBlog",
        loader: async () => { 
          return fetch('https://empower-server-production.up.railway.app/singleBlog');
        },
        element: <RequiredAuth><DevelopmentBlog /></RequiredAuth>},

      {
        path: "/blogs/:id",
        element: <RequiredAuth><BlogDetail /></RequiredAuth>},


    
  ]);