import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home/Home/Home";
import Contacts from "../Layout/Home/Contacts/Contacts";
import Main from "./Main";
import Login from "../Layout/AuthLayout/Login";
import Register from "../Layout/AuthLayout/Register";
import PrivateRoute from "../Authentication/VerifiesRoutes/PrivateRoute";
import Dashboard from "../Layout/Dashboard/Dashboard/Dashboard";
  
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <p>error</p> ,
      element: <Main></Main> ,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/contacts',
            element: <Contacts></Contacts>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
  ]);

  export default router ;