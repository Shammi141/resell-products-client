import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryWiseProduct from "../../Pages/CategoryWiseProduct/CategoryWiseProduct";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import MyBooking from "../../Pages/Dashboard/MyBooking/MyBooking";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import WrongPage from "../../Pages/WrongPage/WrongPage";
import AdminRoute from "../AdminRoute/AdminRoute";
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
                element: <PrivateRoute>
                    <CategoryWiseProduct></CategoryWiseProduct>
                </PrivateRoute>,
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
                path: '/dashboard/myorders',
                element: <MyBooking></MyBooking>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute>
                    <AllSeller></AllSeller>
                </AdminRoute>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute>
                    <AllBuyer></AllBuyer>
                </AdminRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProduct></MyProduct>
            },
        ]
    },
    {
        path: '*',
        element: <WrongPage></WrongPage>
    }
])

export default router;