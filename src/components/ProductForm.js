import React, { useState } from 'react';
import './styles/productform.css';
import inventoryDB from './data/inventoryDB';
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function ProductForm() {
    const history = useHistory();
    const location = useLocation();
    let initiaState = {
        product_name: '',
        product_price: 0,
        product_img: '',
        product_description: ''
    }
    if (location && location.state && location.state.isEdit) {
        initiaState = location.state.product;
    }
    const [productName, setProductName] = useState(initiaState.product_name);
    const [price, setPrice] = useState(initiaState.product_price);
    const [description, setDescription] = useState(initiaState.product_description);
    const [imgURL, setImgURL] = useState(initiaState.product_img);
    const formHandler = (e) => {
        if (location && location.state && location.state && location.state.isEdit) {
            inventoryDB.forEach((val, i) => {
                e.preventDefault();
                if (val.id === initiaState.id) {
                    inventoryDB[i] = {id: initiaState.id, product_img: imgURL, product_name: productName, product_description: description, product_price: price };
                    history.push({
                        pathname: '/'
                    })
                }
            })
        } else {
            inventoryDB.push({ product_img: imgURL, product_name: productName, product_description: description, product_price: price })
            e.preventDefault();
            alert("Message Sent!");
            setProductName('');
            setPrice(0);
            setDescription('');
            history.push({
                pathname: '/'
            })
        }

    }
    return (
        <div className='form-div'>
            <form className='main-form' onSubmit={e => formHandler(e)}>
                <div className='form-div-1'>
                    <input placeholder='Product Name' className='input-name'
                        onChange={e => setProductName(e.target.value)}
                        type='text' value={productName}
                    />

                    <input placeholder='Price' className='input-price'
                        onChange={e => setPrice(e.target.value)}
                        type='number' value={price}
                    />

                </div>
                <br />
                <input placeholder='Image URL' className='input-img'
                    onChange={e => setImgURL(e.target.value)}
                    type='text' value={imgURL}
                />
                <textarea placeholder='Product Description'
                    className='input-description' type='textarea'
                    onChange={e => setDescription(e.target.value)}
                    value={description}>
                </textarea>
                <input className='input-submit' type='submit' value={location && location.state && location.state.isEdit ? 'edit item' : 'add item'} />

            </form>
        </div>
    );
}
// <label className = 'description-label'>Product Description</label><br/>
/* 
<form onSubmit = {formHandler}>
                <input type = 'text' value = 'initial text value'></input>
                <input type = 'submit'></input>
            </form>
*/
export default ProductForm;
