import React from 'react'
import inventoryDB from './data/inventoryDB';

function GetProducts(){
            return inventoryDB.map((product,index)=>{
                return (
                    <div key = {index} class="ui card">
                            <div class="image">
                                <img src={product.product_img}/>
                            </div>
                            <div class="content">
                                <p class="header">{product.product_name}</p>
                                <div class="meta">
                                    <p>Price : {product.product_price}</p>
                                </div>
                                <div class="description">
                                    <p>Description : </p>
                                    {product.product_description}
                                </div>
                            </div>
                    </div>
                );        
            });
}

export default GetProducts;
