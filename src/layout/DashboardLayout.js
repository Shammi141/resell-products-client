import React, { useContext, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useUserType from '../hooks/useUserType';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [userType] = useUserType(user?.email);
    const navigate = useNavigate();
    useEffect(()=>{
        if(user){
            if (userType === 'buyer'){
                return navigate('/dashboard/myorders');
            }
            if (userType === 'seller'){
                return navigate('/dashboard/myproducts');
            }
           
        }
    },[user]);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">

                    <Outlet></Outlet>

                </div>

                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul  className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            userType === 'buyer' &&
                            <li><Link to="/dashboard/myorders">My Orders</Link></li>
                        }
                        {
                            userType === 'seller' &&
                            <>
                                <li><Link to="/dashboard/myproducts">My Products</Link></li>
                                <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                            </>
                            
                        }                       
                        {
                            isAdmin && 
                            <>
                                <li><Link to="/dashboard/allbuyer">All Buyer</Link></li>
                                <li><Link to="/dashboard/allseller">All Seller</Link></li>
                                <li><Link to="/dashboard/reporteditems">Reported Items</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;