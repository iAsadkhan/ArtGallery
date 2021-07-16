import React ,{useContext,useState} from 'react'
import {Context} from '../context'
import CartItem from '../cartItem'

function Cart() {
    const {cartItems,emptyCart}=useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")

    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}  />
    ))

    function placeOrder() {
        if(cartItems.length>0)
        {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }
    else {console.log("cannot proceed empty cart")}
    }
    return (
        <div>
            <main className="cart-page">
                <h1>Check out</h1>
                {cartItemElements}
                {cartItems.length>0?
                <>
                <p className="total-cost">Total:{totalCostDisplay} </p>
            <div className="order-button">
                <button onClick={e=>placeOrder()}>{buttonText}</button>
            </div>
            </>:
                  <p>You have no items in your cart.</p>
}
            </main>
        </div>
    )
}

export default Cart
