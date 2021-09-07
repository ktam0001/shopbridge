import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles/inventory.css';
import GetProducts from './GetProducts';


const Inventory = () => {
    return (
            <div className = ''>
                <Header prop = 'ViewInventory'></Header>
                <div className = 'inventory-main-div'>
                        <h2 className = 'inventory-h2'>Inventory<br />Items</h2>
                        <hr size="8" color="black"></hr>
                        <div className = 'inventory-grid'>
                            <GetProducts></GetProducts>
                        </div>
                </div>
                
            </div>
        )
}
//<Footer></Footer>
// <img src="https://portfolio-webapp-6ea1a.web.app/static/media/Avatar.9d33f575.jpg" 
//                             alt="Product Image" className = "product-img"/>
//                         <div class="card-details">
//                             <h4><b>HP Laptop</b></h4>
//                             <p>420 Bekar quality</p>
//                         </div>
export default Inventory
