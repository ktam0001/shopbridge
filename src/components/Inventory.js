import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles/inventory.css';

const Inventory = () => {
    return (
        <React.Fragment>
            <div className = ''>
                <Header prop = 'ViewInventory'></Header>
                <div className = 'inventory-main-div'>
                    Inventory
                </div>
                <Footer></Footer>
            </div>
        </React.Fragment>
    )
}

export default Inventory
