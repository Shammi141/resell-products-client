import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyBooking = () => {

    const {user} = useContext(AuthContext);
    const url = `https://resell-products-server.vercel.app/bookings?email=${user?.email}`;

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data =await res.json();
            return data;
        }
    });

    return (
        <div>
            <h3 className='text-3xl text-cyan-800 my-10 text-center font-bold'>All Of My Orders</h3>
            <div className='bg-gray-300 rounded-md'>
                <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Number</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Booking Date</th>
                                <th>Meeting Location</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                bookings?.map((booking, i) => <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.name}</td>
                                    <td>{booking.phone}</td>
                                    <td>{booking.pname}</td>
                                    <td>{booking.price}</td>
                                    <td>{booking.selectedDate}</td>
                                    <td>{booking.location}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBooking;