import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookProductBanner from './BookProductBanner/BookProductBanner';
import CategoryWiseProductData from './CategoryWiseProductData/CategoryWiseProductData';

const CategoryWiseProduct = () => {
    const { category_name } = useLoaderData();
    const [selectedDate, setSelectedDate] = useState(new Date());
    
    return (
        <div>
            <h2 className='text-center text-4xl font-bold text-blue-600 my-10'>You are exploring {category_name} items</h2>
            
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