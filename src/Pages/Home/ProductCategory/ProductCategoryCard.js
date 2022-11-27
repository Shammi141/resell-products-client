import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategoryCard = ({product}) => {
    const { category_name, _id } = product;
    return (
        <div className="card w-60 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title mx-auto my-3">{category_name}</h2>
                <Link to={`/category/${_id}`}><button className="btn btn-primary">See Products</button></Link>                     
            </div>
        </div>
    );
};

export default ProductCategoryCard;