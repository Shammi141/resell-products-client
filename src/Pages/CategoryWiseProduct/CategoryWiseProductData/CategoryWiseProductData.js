import { format } from 'date-fns';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const CategoryWiseProductData = ({ selectedDate }) => {
    const allData = useLoaderData();
    const [products, setProducts] = useState(null);

    // const { data, isLoading} = useQuery({
    //     queryKey: ['products', 'id'],
    //     queryFn: async () =>{
    //         const data = await
    //     }
    // })

    return (
        <div>

            <p>You have selected date: {format(selectedDate, 'PP')}</p>

            <div className='grid gap-12 grid-cols-1 lg:grid-cols-2'>
                {
                    allData?.map(product =>{
                        return <div className="card bg-base-100 shadow-xl ">
                            <figure className="px-10 pt-10">
                                <img src={product.product_picture} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.product_name}</h2>

                                <div className='flex gap-4'>
                                    <small>Current Price: <small className='bg-slate-300 px-2 rounded text-red-600 font-bold text-xl'>${product.release_price}</small></small>
                                    <small>Time duration of used: <small className='bg-slate-300 px-2 rounded font-bold'>{product.years_of_use}</small></small>
                                    <small>Original Price: <small className='bg-slate-300 px-2 rounded font-bold'>${product.original_price}</small></small>
                                </div>
                            </div>
                            <p className='px-8'>Seller Name: {product.seller_name}</p>

                            <div>
                                <div className='card-body'>
                                    <small>Posted date: <small className='bg-slate-300 px-2 rounded font-bold'>{product.posted_date}</small></small>
                                    <small>Product Condition: <small className='bg-slate-300 px-2 rounded font-bold'>{product.position}</small></small>
                                    <small>Location: <small className='bg-slate-300 px-2 rounded font-bold'>{product.location}</small></small>
                                    <p>{product.product_description}</p>
                                </div>

                                <div className="card-actions px-8 pb-4">
                                    <label
                                        htmlFor="booking-modal"
                                        className="btn btn-primary"
                                        onClick={() => setProducts(product)}
                                    >Book Now</label>
                                </div>
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