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
            <div className = ''>
                <Header prop = 'AddItem'></Header>
                <ProductForm></ProductForm>
                
            </div>
        </React.Fragment>
    )
}
//<Footer></Footer>
export default AddItem;
