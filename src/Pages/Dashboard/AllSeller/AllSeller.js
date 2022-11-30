import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['allsellers'],
        queryFn: async() =>{
            const res = await fetch(`https://resell-products-server.vercel.app/allsellers`, {
                headers: {
                    'content-type': 'application/json',
                    authorization: `barer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });

    const handelMakeVerified = id =>{
        fetch(`https://resell-products-server.vercel.app/makeverified/${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                toast.success('Successfully made verified');
                refetch();
            }
        })
    }

    const userDelete = id =>{
        fetch(`https://resell-products-server.vercel.app/userdelete/${id}`,{
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if (data.deletedCount > 0){
                toast.success('Successfully deleted');
                refetch();
            }
        })
    }



    return (
        <div>
            <h2 className='text-3xl text-cyan-800 my-10 text-center font-bold'>All Of The Sellers</h2>

            <div className='bg-gray-300 rounded-md'>
                <div className="overflow-x-auto p-8">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Verified</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users?.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {user?.verified === 'No' ?
                                            <button onClick={() => handelMakeVerified(user._id)} className='btn btn-xs btn-info'>Make Verified</button>
                                            :
                                            <p>Verified</p>
                                        }
                                    </td>
                                    <td><button onClick={() => userDelete(user._id)} className='btn btn-xs btn-error'>Delete</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSeller;