import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ProductForm from './ProductForm';
// import ContactUsFooter from './ContactUsFooter';
// import resume_link from '../assets/icons/resume_link.png';
import './styles/additem.css';

function AddItem() {
    return (
        <React.Fragment>
            <div className = 'contact-maindiv'>
                <Header prop = 'AddItem'></Header>
                <div className = 'additem-h1-div'>
                    <h1 className = 'additem-h1'>Add Item</h1>
                </div>
                <ProductForm></ProductForm>
                <Footer></Footer>
            </div>
        </React.Fragment>
    )
}
//<Footer></Footer>
export default AddItem;
