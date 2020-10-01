import React from 'react';

import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/Cart.selectors'
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/Cart.actions'

import CartItem from '../Cart-item.js'

import './cart-dropdown.scss'

import CustomButton from '../custom-button/Custom-button';



const CartDropdown = ({cartItems, history, dispatch }) => (
   <div className='cart-dropdown'>
     <div className='cart-items' />
     {
     	cartItems.length ? (
     	cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item= {cartItem} />
       ))
     )
     	: 
     (
     <span className='empty-message'> Your cart is empty </span>
     )}
     <CustomButton onClick={() => { 
     	history.push('/checkout');
     	dispatch(toggleCartHidden());
     }}> GO TO CHECKOUT </CustomButton>
   	
   </div>
)

const mapStateToProps = state => ({
	cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));