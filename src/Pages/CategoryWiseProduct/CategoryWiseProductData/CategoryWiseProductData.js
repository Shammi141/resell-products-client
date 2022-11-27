import { format } from 'date-fns';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const CategoryWiseProductData = ({ selectedDate }) => {
    const { product_name, product_picture, location, release_price, original_price, years_of_use, posted_date, position, seller_name, product_description } = useLoaderData();

    return (
        <div>

            <p>You have selected date: {format(selectedDate, 'PP')}</p>

            <div className='grid gap-12 grid-cols-1 lg:grid-cols-2'>
                <div className="card w-96 bg-base-100 shadow-xl ">
                    <figure className="px-10 pt-10">
                        <img src={product_picture} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{product_name}</h2>

                        <div className='flex gap-4'>
                            <small>Current Price: <small className='bg-slate-300 px-2 rounded text-red-600 font-bold text-xl'>${release_price}</small></small>
                            <small>Time duration of used: <small className='bg-slate-300 px-2 rounded font-bold'>{years_of_use}</small></small>
                            <small>Original Price: <small className='bg-slate-300 px-2 rounded font-bold'>${original_price}</small></small>
                        </div>
                    </div>
                    <p className='px-8'>Seller Name: {seller_name}</p>

                    <div>
                        <div className='card-body'>
                            <small>Posted date: <small className='bg-slate-300 px-2 rounded font-bold'>{posted_date}</small></small>
                            <small>Product Condition: <small className='bg-slate-300 px-2 rounded font-bold'>{position}</small></small>
                            <small>Location: <small className='bg-slate-300 px-2 rounded font-bold'>{location}</small></small>
                            <p>{product_description}</p>
                        </div>

                        <div className="card-actions px-8 pb-4">
                            <label 
                                htmlFor="booking-modal" 
                                className="btn btn-primary"
                                >Book Now</label>
                        </div>
                    </div>
                </div>
            </div>

            <BookingModal></BookingModal>

        </div>
    );
};

export default CategoryWiseProductData;