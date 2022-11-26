import React from 'react';

const ProductCategoryCard = ({product}) => {
    const { category_name } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title mx-auto my-3">{category_name}</h2>
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    );
};

export default ProductCategoryCard;