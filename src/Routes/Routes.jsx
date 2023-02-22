import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Development from '../Pages/Development/Development';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import PostBlog from '../Pages/PostBlog/PostBlog';
import SignUp from '../Pages/SignUp/SignUp';
// import About from '../About/About';
// import MainLayout from "../../layout/MainLayout";
// import Friends from '../Friends/Friends';
// import FriendDetail from '../FriedDetail/FriendDetail';
// import Posts from '../Posts/Posts';
// import PostDetail from '../PostDetail/PostDetail';
// import Countries from '../Countries/Countries';
// import Country from '../Country/Country';

export const router = createBrowserRouter([

    {
    path: "/",element: <MainLayout/>, 
    children:[
      {path: "/", element: <Home />},
      {path: "/home", element: <Home />},
      {path: "postBlog",element: <PostBlog />},
      {path: "development",element: <Development />},
      {path: "login",element: <Login />},
      {path: "signup",element: <SignUp />},

    //   {
    //     path: "friends",
    //     loader: async () => { 
    //       return fetch('https://jsonplaceholder.typicode.com/users');
    //     },
    //     element: <Friends />},

    //     {
    //       path: "posts",
    //       loader: async () => { 
    //         return fetch('https://jsonplaceholder.typicode.com/posts');
    //       },
    //       element: <Posts />},
    //       {
    //         path: "countries",
    //         loader: async () => { 
    //           return fetch('https://restcountries.com/v2/all');
    //         },
    //         element: <Countries />},
      
    ]},


    // {
    // path: "/friends/:friendId", 
    // loader: async ({params}) =>{
    //   console.log(params.friendId);
    //   return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
    // },
    
    // element: <FriendDetail />},
    // {
    //   path: "/post/:postId", 
    //   loader: async ({params}) =>{
    //     console.log(params.postId);
    //     return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    //   },
    //   element: <PostDetail />},

    //   {
    //     path: "/countries/:name", 
    //     loader: async ({params}) =>{
    //       console.log(params.name);
    //       return fetch(`https://restcountries.com/v3.1/name/${params.name}`);
    //     },
    //     element: <Country />},




    // {path: "*", element: <div>not Found!</div>}
    
    
  ]);