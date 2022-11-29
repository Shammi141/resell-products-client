import React from 'react';
import { Link } from 'react-router-dom';

const ProductCategoryCard = ({product}) => {
    const { category_name, _id } = product;
    return (
        <div className="card w- h-44 bg-cyan-700 shadow-xl">
            <div className="card-body">
                <h2 className="card-title mx-auto my-3 text-white">{category_name}</h2>
                <Link to={`/category/${_id}`}><button className="btn btn-info text-white mx-8 px-8">See Products</button></Link>                     
            </div>
        </div>
    );
};

export default ProductCategoryCard;