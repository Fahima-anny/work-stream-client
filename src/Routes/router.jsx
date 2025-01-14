import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Home/Home/Home";
  
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <p>error</p> ,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
      ]
    },
  ]);

  export default router ;