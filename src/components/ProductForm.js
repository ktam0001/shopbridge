import React, {useState} from 'react';
import './styles/productform.css';
function ProductForm() {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
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
                     
                    <input placeholder = 'Product Name' className = 'input-name' onChange = {e=>setProductName(e.target.value)} type = 'text' value = {productName}></input>
                                    
                    <input placeholder = 'Price' className = 'input-price' onChange = {e=>setPrice(e.target.value)} type = 'number' value = {price}></input>
                
                </div>
                <br/>
                <div className = 'form-div-2'>
                    <label className = 'description-label'>Description</label><br/>
                    <textarea className = 'input-description' type = 'textarea' onChange = {e=>setDescription(e.target.value)} value = {description}></textarea>
                </div>
                <br/>
                <input className = 'input-submit' type = 'submit' value = "Submit"></input>
            </form>
        </div>
    );
}
/* 
<form onSubmit = {formHandler}>
                <input type = 'text' value = 'initial text value'></input>
                <input type = 'submit'></input>
            </form>
*/
export default ProductForm;
