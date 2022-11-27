import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({products, selectedDate, setProducts}) => {
    const { product_name, release_price } = products;
    const date = format(selectedDate, 'PP');

    const handelBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            selectedDate: date,
            name,
            price,
            phone,
            location,
            email
        }
        setProducts(null);
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

                        <input name='email' type="email" placeholder="Email address" className="input input-bordered w-full" />

                        <input name='name' type="text" value={`${product_name}`} className="input input-bordered w-full" disabled />

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