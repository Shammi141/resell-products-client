import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyProduct = () => {

    const { user } = useContext(AuthContext);
    const url = `https://resell-products-server.vercel.app/dashboard/myproducts?email=${user?.email}`;

    const { data: products = [], refetch } = useQuery({
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

    // const userDelete = id => {
    //     fetch(`https://resell-products-server.vercel.app/dashboard/myproduct/productdelete/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'content-type': 'application/json',
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.deletedCount > 0) {
    //                 toast.success('Successfully deleted');
    //                 refetch();
    //             }
    //         })
    // }

    // const deleteProduct = (id) => {
    //     const data = {
    //         id: id
    //     }

    //     fetch(`https://resell-products-server.vercel.app/dashboard/myproduct/productdelete/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'content-type': 'application/json',
    //             authorization: `barer ${localStorage.getItem('accessToken')}`
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.deletedCount > 0) {
    //                 toast.success('Delete Successfully!')
    //             }

    //             refetch()
    //         })

    // }


    return (
        <div>
            <h3 className='text-3xl text-cyan-800 my-10 text-center font-bold'>All Of My Products</h3>
            <div className='bg-gray-300 rounded-md'>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>My Email</th>
                                {/* <th>Image</th> */}
                                <th>Product Name</th>
                                <th>Release Price</th>
                                <th>Original Price</th>
                                <th>Years of Use</th>
                                <th>Condition</th>
                                <th>Posted Date</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Description</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                products?.map((product, i) => <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>{product.email}</td>
                                    <td>{product.name}</td>
                                    <td>{product.releaseprice}</td>
                                    <td>{product.originalprice}</td>
                                    <td>{product.useyear}</td>
                                    <td>{product.condition}</td>
                                    <td>{product.date}</td>
                                    <td>{product.location}</td>
                                    <td>{product.status}</td>
                                    <td>{product.description}</td>
                                    <td><button className='btn btn-xs btn-error'>Delete</button></td>
                                    
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