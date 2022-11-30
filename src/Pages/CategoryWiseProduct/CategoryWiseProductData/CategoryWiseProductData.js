import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useUserType from '../../../hooks/useUserType';
import BookingModal from '../BookingModal/BookingModal';

const CategoryWiseProductData = ({ selectedDate }) => {
    const {user} = useContext(AuthContext);
    const allData = useLoaderData();
    const [products, setProducts] = useState(null);
    const [userType] = useUserType(user?.email);
  
    return (
        <div>

            <p className='text-center font-bold text-cyan-700 my-10'>You have selected date: {format(selectedDate, 'PP')} for booking your product.</p>

            <div className='grid gap-12 grid-cols-1 lg:grid-cols-2'>
                {
                    allData?.map(product =>{
                        return <div className="card bg-base-100 shadow-xl ">
                            <figure className="px-10 pt-10">
                                <img src={product.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-cyan-700 font-bold">{product.name}</h2>

                                <div className='flex gap-4'>
                                    <small>Current Price: <small className='bg-slate-300 px-2 rounded text-red-600 font-bold text-xl'>${product.releaseprice}</small></small>
                                    <small>Time duration of used: <small className='bg-slate-300 px-2 rounded font-bold'>{product.useyear}</small></small>
                                    <small>Original Price: <small className='bg-slate-300 px-2 rounded font-bold'>${product.originalprice}</small></small>
                                </div>
                            </div>

                            <div>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg> */}

                                <p className='px-8'>Seller Name: <small className='bg-slate-300 px-2 rounded font-bold'>{product.uname}</small></p>
                                <p className='px-8'>Status: <small className='bg-slate-300 px-2 rounded font-bold'>{product.status}</small></p>
                                <div className='card-body'>
                                    <p>Posted date: <small className='bg-slate-300 px-2 rounded font-bold'>{product.date}</small></p>

                                    <p>Product Condition: <small className='bg-slate-300 px-2 rounded font-bold'>{product.condition}</small></p>

                                    <p>Location: <small className='bg-slate-300 px-2 rounded font-bold'>{product.location}</small></p>

                                    <p>Description: <small className='bg-slate-300 px-2 rounded font-bold'>{product.description}</small></p>
                                </div>

                                { userType === 'buyer' &&
                                    <div className="card-actions px-8 pb-4">
                                        <label
                                            htmlFor="booking-modal"
                                            className="btn btn-info text-white"
                                            onClick={() => setProducts(product)}
                                        >Book Now</label>
                                    </div>
                                }
                            </div>
                        </div>
                    })
                }
            </div>

            {
                products &&
                <BookingModal
                    selectedDate={selectedDate}
                    products={products}
                    setProducts = {setProducts}
                ></BookingModal>
            }

        </div>
    );
};

export default CategoryWiseProductData;