import React, {useContext,useState} from 'react'
import {Context} from './context'
import PropTypes from "prop-types"
import useHover from "./useHover"


function  CartItem({item}) {
    const {removeFromCart}=useContext(Context)
    const [hovered,ref] =useHover();
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    return (
        <div className="cart-item">
            
            <i className={iconClassName} 
            onClick={()=>removeFromCart(item.id)} 
            ref={ref}>
            </i>

            <img src={item.url} alt="notfound" width="130px" />
            <p>$5.99</p>
        </div>
    )
}
CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem;
