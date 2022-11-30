import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyProduct = () => {

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/dashboard/myproducts?email=${user?.email}`;

    const { data: products = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h3 className='text-3xl text-cyan-800 my-10 text-center font-bold'>All Of My Products</h3>
            <div className='bg-gray-300 rounded-md'>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                {/* <th>Name</th> */}
                                {/* <th>Number</th> */}
                                <th>Product Name</th>
                                <th>Product Price</th>
                                {/* <th>Booking Date</th>
                                <th>Meeting Location</th> */}
                            </tr>
                        </thead>
                        <tbody>

                            {
                                products?.map((product, i) => <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    {/* <td>{product.name}</td> */}
                                    {/* <td>{product.phone}</td> */}
                                    <td>{product.name}</td>
                                    <td>{product.releaseprice}</td>
                                    {/* <td>{product.selectedDate}</td>
                                    <td>{product.location}</td> */}
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;