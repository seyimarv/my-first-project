import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/Cart.selectors'
import { selectCartTotal } from '../../redux/cart/Cart.selectors'
import CheckoutItem from '../checkout-item/Checkout-item'
import StripeCheckoutButton from '../../components/stripe-button/Stripe-button'

import './checkout.scss'



const CheckoutPage = ({cartItems, cartPrice}) => (
 <div className='checkout-page'>
 	<div className='checkout-header'>
 		<div className='header-block'>
 			<span>PRODUCT</span>
 		</div>
 		<div className='header-block'>
 			<span>DESCRIPTION</span>
 		</div>
 		<div className='header-block'>
 			<span>QUANTITY</span>
 		</div>
 		<div className='header-block'>
 			<span>PRICE </span>
 		</div>
 		<div className='header-block'>
 			<span>REMOVE</span>
 		</div>
 	</div>

 	{
 		cartItems.map(cartItem =>
          (<CheckoutItem key={cartItem.id} cartItem={cartItem} />
           )
 		)
 	}
 	<div className='total'>
 	  <span>Total: ${cartPrice}</span></div>
 	  <div className='test-warning' >
 	   *Please use the following test credit card for payments*
 	   <br />
 	   4242 4242 4242 4242 - Exp: 01/20 - cvv: 123
 	  </div>
 	  <StripeCheckoutButton price={cartPrice} />
  </div>
 
   
);
const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartPrice: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);