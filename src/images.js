import React from 'react'
import {useState,useContext} from 'react'
import {Context} from './context'
import PropTypes from "prop-types"
import useHover from "./useHover"

function Image({className , img}) 
{
    const {toggleFavorite ,addToCart,cartItems,removeFromCart} = useContext(Context)
    const[hovered,ref]=useHover()

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon() 
    {
        const selected = cartItems.some(item=> item.id === img.id)
        if(selected)
        {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)} ></i>
        }
        else if(hovered)
        {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }
    }


    return (
     <div 
     ref={ref}
     className={`${className} image-container`}>
        <img src={img.url} alt="imagenotfound" className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
       //<div></div>
    )
    
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}
export default Image
