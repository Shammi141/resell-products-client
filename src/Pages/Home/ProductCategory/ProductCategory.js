import React, { useEffect, useState } from 'react';
import ProductCategoryCard from './ProductCategoryCard';

const ProductCategory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://resell-products-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <p className="text-center text-4xl font-bold text-cyan-800 my-10">Product Categories</p>

            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductCategoryCard
                        key={product._id}
                        product={product}
                    ></ProductCategoryCard>)
                }
            </div>
        </div>
    );
};

export default ProductCategory;