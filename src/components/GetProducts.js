import React, { useState } from 'react'
import inventoryDB from './data/inventoryDB';
import './styles/products.css';
import {useHistory} from 'react-router-dom';

function GetProducts() {
    const history = useHistory();
    const [inventoryData, setInventoryData] = useState(inventoryDB);
    const modifyHandler = (e, product)=> {
        history.push(
            {
                pathname: '/additem',
                state: {
                    product: product,
                    isEdit: true
                }
            });
    }

    const deleteHandler = (index) => {
        let tempData = [...inventoryData];
        tempData.splice(index,1);
        setInventoryData(tempData);

    }
    return inventoryData.map((product, index) => {
        return (
            <div key={index} className="ui card">
                <div className="image">
                    <img src={product.product_img} />
                </div>
                <div className="content">
                    <p className="header">{product.product_name}</p>
                    <div className="meta">
                        <p>Price : {product.product_price}</p>
                    </div>
                    <div className="description">
                        <p>Description : </p>
                        {product.product_description}
                    </div>
                </div>
                <div>
                    <button className="button-delete" onClick = {()=> deleteHandler(index)}> Delete</button>
                    <button onClick={(e)=> {
                        modifyHandler(e, product)
                    }} className="button-modify">Modify</button>
                </div>

            </div>
        );
    });
}

export default GetProducts;
