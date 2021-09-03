import React, {useState} from 'react';
import './styles/productform.css';
function ProductForm() {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState();
    const [description, setDescription] = useState('');
    const [imgURL, setImgURL] = useState('');
    const formHandler = (e) => {
        e.preventDefault();
        alert("Message Sent!");
        setProductName('');
        setPrice(0);
        setDescription('');
    }
    return (
        <div className = 'form-div'>
            <form className = 'main-form' onSubmit = {e => formHandler(e)}>
                <div className = 'form-div-1'>
                    <input placeholder = 'Product Name' className = 'input-name' 
                        onChange = {e=>setProductName(e.target.value)} 
                        type = 'text' value = {productName}
                    />
                                    
                    <input placeholder = 'Price' className = 'input-price' 
                        onChange = {e=>setPrice(e.target.value)} 
                        type = 'number' value = {price} 
                    />
                
                </div>
                <br/>
                <input placeholder = 'Image URL' className = 'input-img' 
                            onChange = {e=>setImgURL(e.target.value)} 
                            type = 'text' value = {imgURL} 
                />          
                <textarea placeholder = 'Product Description'
                        className = 'input-description' type = 'textarea' 
                        onChange = {e=>setDescription(e.target.value)} 
                        value = {description}>
                </textarea>
                <input className = 'input-submit' type = 'submit' value = "Add Item" />
                
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
