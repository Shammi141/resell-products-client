import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const BookingModal = ({products, selectedDate, setProducts}) => {
    const { name, releaseprice } = products;
    const date = format(selectedDate, 'PP');

    const {user} = useContext(AuthContext);

    const handelBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const uname = form.uname.value;
        const pname = form.pname.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            selectedDate: date,
            uname,
            pname,
            price,
            phone,
            location,
            email
        }
        //sending booking to db
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
                    <h3 className="text-2xl text-cyan-800 font-bold">You are booking item named: {name}</h3>

                    <form onSubmit={handelBooking} className='grid grid-cols-1 gap-3 mt-8'>
                        <input type="text" value={`Booking date: ${date}`} className="input input-bordered w-full input-info" disabled />

                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email address" className="input input-bordered w-full input-info"  disabled/>

                        <input name='uname' type="text" defaultValue={user?.displayName} placeholder="User Name" className="input input-bordered w-full input-info"  disabled/>

                        <input name='pname' type="text" value={`${name}`} className="input input-bordered w-full input-info" disabled />

                        <input name='price' type="text" value={`$${releaseprice}`} className="input input-bordered w-full input-info" disabled />

                        <input name='phone' type="text" placeholder='Phone Number' className="input input-bordered w-full input-info" required />

                        <input name='location' type="text" placeholder='Location' className="input input-bordered w-full input-info" required/>
                        <br />
                        <input className='w-full btn btn-info text-white ' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;