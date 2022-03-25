import './Products.css'
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = ({addToCart}) => {
    const [products,setProducts] = useState([])
    const [addName , setAddName] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const newProducts = products.slice(10,30)
    // let allName = []
    const click = (product) =>{
        console.log(product);
         const newName = [...addName , product.name]
        setAddName(newName)
      }
    return (
        <div>
            <div className="container-fluid pt-5 ">
                <div className="row gx-5 parent">
                    <div className="col-lg-10 main-con">
                       {
                           newProducts.map(product => <Product click={click} addToCart={addToCart} product={product} key={product.id}></Product> )
                       }
                    </div>
                    <div className="col-lg-2  h-50 py-5" style={{backgroundColor:'#F190B7'}}>
                        <h3 className='text-center '>This is side bar</h3>
                        <ol>
                            {
                                addName.map(add => <li key={add}>{add}</li>)
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;