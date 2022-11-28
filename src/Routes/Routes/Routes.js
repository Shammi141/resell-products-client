import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryWiseProduct from "../../Pages/CategoryWiseProduct/CategoryWiseProduct";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyBooking from "../../Pages/Dashboard/MyBooking/MyBooking";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import WrongPage from "../../Pages/WrongPage/WrongPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/category/:id',
                element: <CategoryWiseProduct></CategoryWiseProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyBooking></MyBooking>
            }
        ]
    },
    {
        path: '*',
        element: <WrongPage></WrongPage>
    }
])

export default router;