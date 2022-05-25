import React, { useState, useEffect } from 'react';
import Product from './Product';

const Products = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='my-10'>
            <h4 className='text-4xl text-accent text-center my-12'>Our Products</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(product => <Product
                        key={product._id}
                        product={product}
                        // setTreatment={setTreatment}
                    ></Product>)
                }
            </div>
          
        </div>
    );
};

export default Products;