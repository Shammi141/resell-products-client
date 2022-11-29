import { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import BookProductBanner from './BookProductBanner/BookProductBanner';
import CategoryWiseProductData from './CategoryWiseProductData/CategoryWiseProductData';

const CategoryWiseProduct = () => {
    // const { name } = useLoaderData();
    const [selectedDate, setSelectedDate] = useState(new Date());
    
    return (
        <div>
            <h2 className='text-center text-4xl font-bold text-cyan-700 my-10'>Book Your Product Fast</h2>
            
            <BookProductBanner 
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></BookProductBanner>
            
            <CategoryWiseProductData
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></CategoryWiseProductData>

        </div>
    );
};

export default CategoryWiseProduct;