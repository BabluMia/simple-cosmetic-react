import './Products.css'
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = ({addToCart}) => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    // console.log(addToCart);
    const newProducts = products.slice(10,30)
    // console.log(newProducts);
    return (
        <div>
            <div className="container-fluid pt-5 ">
                <div className="row gx-5 parent">
                    <div className="col-lg-10 main-con">
                       {
                           newProducts.map(product => <Product addToCart={addToCart} product={product} key={product.id}></Product> )
                       }
                    </div>
                    <div className="col-lg-2 bg-danger h-50 py-5">
                        <h3 className='text-center '>This is side bar</h3>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;