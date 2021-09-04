import React, {useState} from 'react'
import inventoryDB from './data/inventoryDB';
import './styles/getproducts.css';

function GetProducts(){

    const [inventoryData, setInventoryData] = useState(inventoryDB);

    const onDelete = (index) => {
        // inventoryDB.splice(index,1);
        let temp = [...inventoryData];
        temp.splice(index,1)
        setInventoryData(temp);
        console.log(inventoryData);       
    }

    return inventoryData.map((product,index)=>{
        return (
            <div key = {index} className = "ui card">
                    <div className ="image">
                        <img className = "getproduct-img" src={product.product_img}/>
                    </div>
                    <div className = "content">
                        <p className = "header">{product.product_name}</p>
                        <div className = "meta">
                            <p>Price : {product.product_price}</p>
                        </div>
                        <div className = "description">
                            <p>Description : </p>
                            {product.product_description}
                        </div>
                        <button className = 'getproduct-delete' type = 'submit' onClick = {() => onDelete(index)}>delete</button>
                    </div>
            </div>
        );        
    });
            // return inventoryDB.map((product,index)=>{
            //     return (
            //         <div key = {index} className = "ui card">
            //                 <div className ="image">
            //                     <img className = "getproduct-img" src={product.product_img}/>
            //                 </div>
            //                 <div className = "content">
            //                     <p className = "header">{product.product_name}</p>
            //                     <div className = "meta">
            //                         <p>Price : {product.product_price}</p>
            //                     </div>
            //                     <div className = "description">
            //                         <p>Description : </p>
            //                         {product.product_description}
            //                     </div>
            //                     <button className = 'getproduct-delete' type = 'submit' onClick = {() => onDelete(index)}>delete</button>
            //                 </div>
            //         </div>
            //     );        
            // });
}

export default GetProducts;
