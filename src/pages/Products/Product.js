import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const {_id, name, totalquantity,minquantity,img,price } = product;
    const navigate = useNavigate();
    const navigateToProductDetail = (id) =>{
    navigate(`/product/${id}`);
    }
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
            <figure><img src={img} alt="Shoes" /></figure>

                <h2 class="text-xl font-bold text-accent">{name}</h2>
                <h2 class="text-xl font-bold ">TK {price}</h2>

                
                <p>{
                    totalquantity.length > 0
                        ? <span>Minimum order: {minquantity}</span>
                        : <span className='text-red-500'>Out of Stock!</span>
                }</p>
                <p>{totalquantity} {totalquantity >= minquantity ? 'ps' : 'ps'} available</p>
                <div class="card-actions justify-center">
                    <label
                        for="booking-modal"
                        disabled={totalquantity <= minquantity}
                        onClick={() => navigateToProductDetail(_id)}
                        class="btn  bg-success px-16 text-white"
                        >Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default Product;