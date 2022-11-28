import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const BookingModal = ({products, selectedDate, setProducts}) => {
    const { product_name, release_price } = products;
    const date = format(selectedDate, 'PP');

    const {user} = useContext(AuthContext);

    const handelBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const name = form.uname.value;
        const pname = form.pname.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            selectedDate: date,
            name,
            pname,
            price,
            phone,
            location,
            email
        }
        // console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                setProducts(null);
                toast.success('Booking confirmed');
            }
        })

        
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product_name}</h3>

                    <form onSubmit={handelBooking} className='grid grid-cols-1 gap-3 mt-8'>
                        <input type="text" value={`Booking date: ${date}`} className="input input-bordered w-full" disabled />

                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email address" className="input input-bordered w-full"  disabled/>

                        <input name='uname' type="text" defaultValue={user?.displayName} placeholder="User Name" className="input input-bordered w-full"  disabled/>

                        <input name='pname' type="text" value={`${product_name}`} className="input input-bordered w-full" disabled />

                        <input name='price' type="text" value={`$${release_price}`} className="input input-bordered w-full" disabled />

                        <input name='phone' type="text" placeholder='Phone Number' className="input input-bordered w-full" required />

                        <input name='location' type="text" placeholder='Location' className="input input-bordered w-full" required/>
                        <br />
                        <input className='w-full btn' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;