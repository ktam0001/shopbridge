import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    return (
        <div className="ui inverted segment" style = {{'borderRadius' : '0', 'margin' : 0, 'width' : '100vw'}}>
            <div className="ui inverted secondary pointing menu">
                <NavLink exact className= {props.prop === 'ViewInventory' ? 'item active' : 'item'} to = '/'>
                    View Inventory
                </NavLink>
                <NavLink exact className= {props.prop === 'AddItem' ? 'item active' : 'item'} to = '/additem'>
                    Add Item
                </NavLink>

            </div>
        </div>
    )
}

// <NavLink exact className= {props.prop === 'About' ? 'item active' : 'item'} to = '/about'>
//                     About
//                 </NavLink>
export default Header;
