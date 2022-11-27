import React from 'react';
import { DayPicker } from 'react-day-picker';


const BookProductBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header className='mx-auto'>
            <DayPicker
                mode='single'
                selected={selectedDate}
                onSelect={setSelectedDate}
            />
        </header>
    );
};

export default BookProductBanner;