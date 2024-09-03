import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Booking from "../Pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
{
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path: '/',
            element:<Navigate to={'/home'}></Navigate>
        },
        {
            path: '/home',
            element:<Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/checkout/:id',
            element:<CheckOut></CheckOut>
        },
        {
            path: '/booking',
            element: <PrivateRoute><Booking></Booking></PrivateRoute>
        }
    ]
},
]);

export default router